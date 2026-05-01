export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-8 mt-auto border-t border-base-300">
      <nav className="grid grid-flow-col gap-4">
        <a href="/all-tiles" className="link link-hover">Browse Tiles</a>
        <a href="/login" className="link link-hover">Account</a>
        <a href="mailto:contact@tilesgallery.com" className="link link-hover">Contact Us</a>
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} TilesGallery. Crafted with ❤️ for beautiful spaces.</p>
      </aside>
    </footer>
  );
}