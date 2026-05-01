'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { useSession } from 'better-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authClient.signOut();
      toast.success('Logged out successfully!');
      router.push('/');
      router.refresh();
    } catch (error) {
      toast.error('Logout failed');
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-base-200">
      
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          <span className="text-primary">🏠</span> TilesGallery
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/" className={`btn btn-sm ${pathname === '/' ? 'btn-active' : ''}`}>Home</Link></li>
          <li><Link href="/all-tiles" className={`btn btn-sm ${pathname === '/all-tiles' ? 'btn-active' : ''}`}>All Tiles</Link></li>
          {session?.user && (
            <li><Link href="/my-profile" className={`btn btn-sm ${pathname === '/my-profile' ? 'btn-active' : ''}`}>My Profile</Link></li>
          )}
        </ul>
      </div>

      
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session?.user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring-2 ring-primary/20">
                <img 
                  alt="Profile" 
                  src={session.user.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user.name)}&background=2C5F2D&color=fff`} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
              <li><Link href="/my-profile">Profile</Link></li>
              <li><button onClick={handleLogout} disabled={isLoggingOut} className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
        )}
      </div>
    </div>
  );
}