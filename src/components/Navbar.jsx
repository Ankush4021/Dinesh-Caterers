import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Clock3 } from 'lucide-react';

import Logo from './Logo.jsx';
import Button from './Button.jsx';
import { navLinks } from '../data/navLinks.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Upar wali chhoti strip */}
      <div className="flex h-9 items-center justify-between bg-ink px-5 text-[9px] uppercase tracking-wider text-[#e9dfd3] sm:px-8 md:text-[11px] lg:px-[8%]">
        <span className="hidden md:block">
          Catering for life’s meaningful moments
        </span>

        <div className="ml-auto flex items-center gap-2.5">
          <Clock3 size={14} />
          <span>Dehradun &amp; Doiwala, Uttarakhand</span>
          <a href="tel:+919634185883" className="hidden text-white sm:block">
            +91 96341 85883
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#e9e1d7] bg-cream/95 px-5 backdrop-blur-md sm:px-8 md:h-[88px] lg:px-[8%]">
        <Logo onClick={closeMenu} />

        <nav
          aria-label="Main navigation"
          className={`absolute inset-x-0 top-full flex flex-col gap-1 bg-cream px-5 pb-6 pt-2 shadow-xl transition-all duration-300 md:visible md:static md:translate-y-0 md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative py-3 text-[17px] transition-colors hover:text-[#9a6c43] md:py-2 md:text-[15px] md:after:absolute md:after:inset-x-0 md:after:bottom-1 md:after:h-px md:after:origin-right md:after:scale-x-0 md:after:bg-gold md:after:transition-transform md:after:duration-300 md:hover:after:origin-left md:hover:after:scale-x-100 ${
                  isActive
                    ? 'text-[#9a6c43] md:after:origin-left md:after:scale-x-100'
                    : 'text-[#514b44]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Button
            size="sm"
            className="mt-2 justify-between md:mt-0"
            onClick={closeMenu}
          >
            Plan your event
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
