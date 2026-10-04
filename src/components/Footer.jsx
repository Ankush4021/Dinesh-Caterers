import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

import Logo from './Logo.jsx';
import Label from './Label.jsx';
import { navLinks } from '../data/navLinks.js';
import { locations } from '../data/locations.js';

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/dineshcaterers15?stkn=MXNidDM4eTI4MjFmeQ==' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61581093893544' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919634185883' },
];

const colHeading = 'mb-2 text-[11px] tracking-[0.18em] text-light-gold';
const colLink = 'text-[13px] leading-[1.7] text-[#d2c9bf] transition-colors hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 text-[#f7f1e8] sm:px-8 lg:px-[8%] lg:pt-16">
      <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.6fr_1fr_1fr] lg:gap-[5%]">
        {/* Brand + social */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light  size="large" />

          <p className="my-5 max-w-[320px] text-sm leading-[1.85] text-[#bdb4aa]">
            Good food, thoughtful service and warm hospitality for celebrations
            big and small. Vegetarian and non-vegetarian catering, planned
            around your event.
          </p>

          <div className="flex gap-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-[#5b5248] text-light-gold transition-colors hover:bg-gold hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-start gap-3.5">
          <h4 className={colHeading}>EXPLORE</h4>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={colLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact + addresses */}
        <div className="flex flex-col items-start gap-3.5">
          <h4 className={colHeading}>GET IN TOUCH</h4>

          <a href="tel:+919634185883" className={`flex items-center gap-2 ${colLink}`}>
            <Phone size={15} className="text-light-gold" />
            +91 96341 85883
          </a>

          <a href="tel:+919690070133" className={`flex items-center gap-2 ${colLink}`}>
            <Phone size={15} className="text-light-gold" />
            +91 96900 70133
          </a>

          <a
            href="mailto:support.dineshcaterers@gmail.com"
            className={`flex items-center gap-2 break-all ${colLink}`}
          >
            <Mail size={15} className="shrink-0 text-light-gold" />
            support.dineshcaterers@gmail.com
          </a>

          {locations.map((location, index) => (
            <div key={location.name} className="flex gap-2">
              <MapPin size={15} className="mt-1 shrink-0 text-light-gold" />
              <div className="flex flex-col gap-1 text-[13px] leading-[1.7] text-[#d2c9bf]">
                <strong className="text-[#e8d8c5]">
                  {index === 0 ? 'Doiwala Location' : 'Dehradun Location'}
                </strong>
                <span>{location.address}</span>
                <a
                  href={location.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-light-gold hover:text-white"
                >
                  View map <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-[#5c5145] lg:pl-6">
          <Label>GOOD FOOD, GOOD COMPANY</Label>

          <p className="my-5 font-serif text-[23px] italic leading-normal text-[#e7ddd0]">
            Let's make your next gathering one to remember.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border-b border-[#9b7b59] pb-2 text-[13px] text-light-gold transition-all hover:gap-5"
          >
            Plan an event
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#4b433a] py-5 text-[11px] text-[#aaa198]">
        <span>© {new Date().getFullYear()} Dinesh Caterers. All rights reserved.</span>

        <Link to="/" className="text-[#e0d4c6]">
          Back to home ↑
        </Link>

        <span>
          Designed by{' '}
          <a
            href="https://sira.digital.in/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#e0d4c6] underline underline-offset-4"
          >
            SIRA Digital
          </a>
        </span>
      </div>
    </footer>
  );
}
