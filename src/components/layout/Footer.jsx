import { Link } from 'react-router-dom';
import {  FaTiktok, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elite Chess Ventures</h3>
            <p className="text-brand-brown">
              Nurturing Strategic Minds Through Chess Across Africa
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-brand-brown hover:text-brand-white">About Us</Link></li>
              <li><Link to="/programs" className="text-brand-brown hover:text-brand-white">Programs</Link></li>
              <li><Link to="/services" className="text-brand-brown hover:text-brand-white">Services</Link></li>
              <li><Link to="/contact" className="text-brand-brown hover:text-brand-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="text-brand-brown space-y-2">
              <li>Email: <a href='mailto:elitechessventures@gmail.com'>elitechessventures@gmail.com</a></li>
              <li>Phone: +254 111 449 301</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/elite_chess_ventures" className="text-brand-brown hover:text-brand-white"><FaInstagram size={24} /></a>
              <a href="https://tiktok.com/elitechessventures" className="text-brand-brown hover:text-brand-white"><FaTiktok size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-brown/30 mt-8 pt-8 text-center text-brand-brown">
          <p>© {currentYear} Elite Chess Ventures. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;