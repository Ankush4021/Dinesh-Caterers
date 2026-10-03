import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Hover par neeche se "water fill" effect aata hai (before: wali class).
const base =
  "group relative isolate inline-flex items-center justify-center gap-5 overflow-hidden border font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 before:absolute before:left-1/2 before:top-full before:-z-10 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-500 before:content-[''] hover:before:h-[650%] hover:before:w-[320%] focus-visible:before:h-[650%] focus-visible:before:w-[320%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants = {
  dark: 'border-transparent bg-ink text-white before:bg-gold',
  light: 'border-transparent bg-[#f7f1e8] text-ink before:bg-gold hover:text-white',
  outline: 'border-[#b99a76] bg-transparent text-ink before:bg-ink hover:text-white',
  // Dark background ke upar use karne ke liye
  ghost: 'border-white/40 bg-transparent text-white before:bg-white hover:text-ink',
};

const sizes = {
  md: 'min-h-[52px] px-6 py-4 text-[13px]',
  sm: 'min-h-12 px-4 py-3 text-xs',
};

export default function Button({
  children,
  to = '/contact',
  href,
  variant = 'dark',
  size = 'md',
  className = '',
  onClick,
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rounded"
      />
    </>
  );

  // External link / WhatsApp / tel: ke liye
  if (href) {
    const isWeb = href.startsWith('http');

    return (
      <a
        className={classes}
        href={href}
        target={isWeb ? '_blank' : undefined}
        rel={isWeb ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  // Website ke andar ke page ke liye
  return (
    <Link className={classes} to={to} onClick={onClick}>
      {content}
    </Link>
  );
}
