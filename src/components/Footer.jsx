import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Medico<span className="text-rose-500">Guide</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm max-w-sm">
            A mentorship platform connecting NEET aspirants with verified
            toppers and medical students for real, actionable guidance.
          </p>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-rose-500" />
              medicoguide355@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-rose-500" />
              +91 8269670640
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-rose-500" />
              India
            </li>
          </ul>
        </div>

        {/* Trust Note */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Transparency
          </h3>
          <p className="text-sm text-gray-400">
            We do not sell courses or fake guarantees.  
            Medico-Guide focuses on clarity, discipline, and execution —
            nothing else.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Medico-Guide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
