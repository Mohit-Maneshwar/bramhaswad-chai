// src/components/Footer.jsx
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Bramhaswad Rajvadi Kadak Chai
          </h2>
          <p className="text-sm leading-relaxed">
            Ek dum kadak taste aur rich aroma ke saath, Bramhaswad Rajvadi Kadak
            Chai aapki subah ko banaye aur bhi energetic. Pure, strong aur 100%
            natural.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about">
                <p className="hover:text-yellow-400">About Us</p>
              </Link>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-400">
                Features
              </a>
            </li>
            <li>
              <Link to="/order">
                <p className="hover:text-yellow-400">Order Now</p>
              </Link>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-400">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/contact">
                <p className="hover:text-yellow-400">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Us
          </h3>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={18} /> support@bramhaswadchai.com
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-10 pt-4">
        © {new Date().getFullYear()} Bramhaswad Foods & Spices Pvt. Ltd. | All
        Rights Reserved
      </div>
    </footer>
  );
}
