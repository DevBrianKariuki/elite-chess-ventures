import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Learn', path: '/learn' },
    { name: 'Events', path: '/events' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-brand-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Elite Chess Ventures"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/48x48?text=ECV';
              }}
            />
            <span className="text-xl font-bold text-brand-red hidden sm:block">
              Elite Chess Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-red'
                    : 'text-brand-black hover:text-brand-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/support"
              className="bg-brand-red text-brand-white px-6 py-2 rounded-md hover:bg-brand-red/90 transition-colors font-medium"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-black hover:text-brand-red transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-brand-white rounded-lg shadow-xl border border-brand-brown/10 overflow-hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 text-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-brand-red bg-brand-brown/5'
                        : 'text-brand-black hover:text-brand-red hover:bg-brand-brown/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/support"
                  className="block px-4 py-3 text-lg text-brand-red font-medium hover:bg-brand-brown/5"
                  onClick={() => setIsOpen(false)}
                >
                  Support Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;