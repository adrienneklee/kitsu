import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '/kitsu-logo-white.png';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Only attach listener if we're on the /gallery route
    if (location.pathname !== '/gallery') {
      setScrolled(false); // Reset when leaving gallery
      return;
    }

    const scrollContainer = document.getElementById('gallery-scroll');
    if (!scrollContainer) return;

    const handleScroll = () => {
      setScrolled(scrollContainer.scrollTop > 15);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const shouldShowBlackBg = isOpen || (location.pathname === '/gallery' && scrolled);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-10 py-4 transition-colors duration-300 
        ${shouldShowBlackBg ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src={Logo}
            alt="kitsu Logo"
            className="h-35 w-70 object-cover"
          />
        </Link>


        <button
          className="md:hidden hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden md:flex space-x-6 text-m tracking-widest lowercase">
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-gray-400 transition-colors ${
                  location.pathname === link.path ? 'text-gray-400' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center text-center space-y-4 mt-4 text-m tracking-widest lowercase md:hidden">
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block hover:text-gray-400 transition-colors ${
                  location.pathname === link.path ? 'text-gray-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
