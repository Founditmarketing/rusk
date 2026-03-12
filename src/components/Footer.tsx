import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rusk-slate-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          <div>
            <span className="font-serif text-2xl tracking-wider uppercase block mb-6">
              Rusk <span className="text-rusk-gold">Construction</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The premier luxury remodeler in Louisiana. Elevating homes with uncompromising quality and timeless design, deeply rooted in the heritage of Avoyelles Parish.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6 text-rusk-gold">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-rusk-gold shrink-0" />
                <span>123 Heritage Blvd<br />Marksville, LA 71351<br />Avoyelles Parish</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-rusk-gold shrink-0" />
                <span>(318) 555-0198</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-rusk-gold shrink-0" />
                <span>inquiries@ruskconstruction.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg uppercase tracking-widest mb-6 text-rusk-gold">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Request a Consultation</Link></li>
            </ul>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-rusk-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rusk-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rusk Construction. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
