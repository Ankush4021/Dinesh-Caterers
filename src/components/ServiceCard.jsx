import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// wide = Services page par thodi badi image.
export default function ServiceCard({ item, index, wide = false }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/contact"
        className={`relative block overflow-hidden bg-[#ded3c5] ${
          wide ? 'h-72 lg:h-[310px]' : 'h-64 lg:h-[270px]'
        }`}
      >
        <img
          src={`/assets/images/${item.image}`}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded" 
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[45%] bg-gradient-to-b from-transparent to-black/30" />

        <span className="absolute left-4 top-4 text-xs tracking-widest text-white">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="absolute bottom-3.5 right-3.5 grid h-[42px] w-[42px] place-items-center rounded-full bg-[#f9f5ef] text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#d9b58b]">
          <ArrowUpRight size={19} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="mb-2.5 font-serif text-xl font-semibold leading-tight md:text-[21px]">
          {item.title}
        </h3>

        <p className="text-sm leading-[1.8] text-muted">{item.description}</p>

        <Link
          to="/contact"
          className="mt-auto inline-flex items-center gap-2.5 pt-4 text-[13px] font-bold text-[#8e633c] transition-all hover:gap-4"
        >
          Enquire about this service
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
