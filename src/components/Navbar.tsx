import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Get a Quote', path: '/quote' },
  ];

  const isDark = isScrolled || location.pathname !== '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span
              className={`font-serif text-2xl tracking-wider uppercase ${isDark ? 'text-rusk-slate-dark' : 'text-white'
                }`}
            >
              Rusk <span className="text-rusk-gold">Construction</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors ${isDark
                    ? 'text-rusk-slate hover:text-rusk-gold'
                    : 'text-white/90 hover:text-white'
                  } ${location.pathname === link.path && isDark ? 'text-rusk-gold font-medium' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className={`px-6 py-2 border text-sm tracking-widest uppercase transition-all ${isDark
                  ? 'border-rusk-slate-dark text-rusk-slate-dark hover:bg-rusk-slate-dark hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-rusk-slate-dark'
                }`}
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDark ? 'text-rusk-slate-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-rusk-slate-dark border-b border-gray-50 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
