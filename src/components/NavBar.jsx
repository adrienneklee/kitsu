import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '/kitsu-logo-white.png';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Full-screen black overlay when menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 opacity-100 transition-opacity duration-300 md:hidden"></div>
      )}

      <nav className="fixed top-0 left-0 w-full bg-opacity-80 z-50 px-10 py-4">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="kitsu Logo"
            className="h-35 w-70 object-cover"
          />

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
          <ul className="flex flex-col space-y-4 mt-4 text-m tracking-widest lowercase md:hidden z-50 relative">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-center block hover:text-gray-400 transition-colors ${
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
    </>
  );
}
