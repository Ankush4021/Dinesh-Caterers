
import { Link } from 'react-router-dom';

export default function Logo({ light = false, onClick, size = 'default' }) {
  const isLarge = size === 'large';

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Dinesh Caterers home"
      className={`flex items-center gap-3 ${
        isLarge ? 'gap-4' : ''
      }`}
    >
      <img
        src="/assets/images/logo.webp"
        alt="Dinesh Caterers logo"
        className={`shrink-0 object-contain ${
          isLarge
            ? 'h-24 w-24 md:h-28 md:w-28'
            : 'h-14 w-14 md:h-[52px] md:w-[52px]'
        } ${light ? 'brightness-0 invert' : ''}`}
      />

      <span
        className={`flex flex-col font-serif leading-[1.02] ${
          isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-[22px]'
        } ${light ? 'text-white' : ''}`}
      >
        Dinesh
        <b className="font-semibold">Caterers</b>
        <small className="mt-1.5 font-sans text-[8px] font-bold tracking-[0.2em] text-gold">
          FLAVOR &amp; TRADITION
        </small>
      </span>
    </Link>
  );
}
