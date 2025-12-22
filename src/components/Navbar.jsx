import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-rose-600"
        >
          Medico<span className="text-gray-900">Guide</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <a
            href="https://forms.gle/Nm4kDvAzytyFmDyCA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border-2 border-rose-500 text-rose-500 hover:bg-rose-50 transition"
          >
            Become a Mentor
          </a>

          <a
            href="https://forms.gle/vfGBzmrqKSQiW8eeA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-rose-500 text-white hover:bg-rose-600 transition shadow-md"
          >
            Get Mentorship
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6 font-semibold text-gray-700">
            
            <a
              href="https://forms.gle/Nm4kDvAzytyFmDyCA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 text-rose-600 border-2 border-rose-500 rounded-md text-center"
            >
              Become a Mentor
            </a>

            <a
              href="https://forms.gle/vfGBzmrqKSQiW8eeA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 bg-rose-500 text-white rounded-md text-center"
            >
              Get Mentorship
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
