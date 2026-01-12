import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Botao from './Botao';
import AlternadorTema from './AlternadorTema';

const Cabecalho: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleFaleConosco = () => {
    setIsMenuOpen(false);
    navigate('/contato#pronto-para-comecar');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <header className="bg-black sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/TriCode Logo.png" alt="TriCode Logo" className="h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <AlternadorTema />
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
            <button onClick={handleFaleConosco}>
              <Botao variant="primary" size="sm">
                Fale Conosco
              </Botao>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <AlternadorTema />
            <button
              className="text-white focus:outline-none"
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
              <button onClick={handleFaleConosco} className="w-full">
                <Botao variant="primary" size="sm" className="w-full">
                  Fale Conosco
                </Botao>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Cabecalho;

