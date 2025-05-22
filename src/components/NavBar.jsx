import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '/kitsu_logo.png';

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
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 px-8 py-4">
      <div className="flex items-center justify-between">
        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        />

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden md:flex space-x-6 text-sm tracking-widest uppercase">
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
        <ul className="flex flex-col space-y-4 mt-4 text-sm tracking-widest uppercase md:hidden">
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
