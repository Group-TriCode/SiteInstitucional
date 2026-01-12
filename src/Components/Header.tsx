import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className="bg-black sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-purple-500'
                    : 'text-white hover:text-purple-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contato">
              <Button variant="primary" size="sm">
                Fale Conosco
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-purple-500'
                      : 'text-white hover:text-purple-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

