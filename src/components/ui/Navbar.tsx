'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Session } from 'better-auth';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

 
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const {  } = await authClient.getSession();
        setSession(data);
      } catch (error) {
        console.error('Failed to fetch session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authClient.signOut();
      toast.success('Logged out successfully!');
      setSession(null);
      router.push('/');
      router.refresh();
    } catch (error) {
      toast.error('Logout failed');
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return (
      <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            <span className="text-primary">🏠</span> TilesGallery
          </Link>
        </div>
        <div className="flex-none gap-2">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-base-200">
      {/* Logo */}
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
        {session?.user ? (
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