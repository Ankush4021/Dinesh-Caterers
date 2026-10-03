import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import { services } from '../../data/services.js';

/* ---------- Small inline icons (decorative, no extra dependency) ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
  className: 'h-6 w-6',
};

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SparkleIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
  </svg>
);

const UtensilsIcon = () => (
  <svg {...iconProps}>
    <path d="M4 3v7a3 3 0 0 0 3 3v8M7 3v7M10 3v7a3 3 0 0 1-3 3M17 21V3c-2.5 1.5-4 4.5-4 8h4" />
  </svg>
);

/* Standard Indian veg / non-veg food-mark: square outline + dot */
function FoodMark({ color, label }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-white"
    >
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center rounded-[3px] border-2"
        style={{ borderColor: color }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      </span>
      {label}
    </span>
  );
}

/*
  Sirf wahi numbers rakhna jo sach ho.
  `badges: true` = value ki jagah Veg / Non-veg badges dikhte hain.
  Real number add karna ho to neeche wali commented line use karo.
*/
const stats = [
  {
    icon: PinIcon,
    value: 2,
    label: 'Locations',
    note: 'Doiwala & Dehradun',
  },
  {
    icon: SparkleIcon,
    value: services.length,
    label: 'Catering services',
    note: 'Weddings to poojas',
  },
  {
    icon: UtensilsIcon,
    badges: true,
    label: 'Menu options',
    note: 'Planned around your guests',
  },
  // { icon: SparkleIcon, value: 500, suffix: '+', label: 'Events served', note: 'Apna real number daalo' },
];

/* Number 0 se upar ginti karta hai jab screen par aata hai */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, to, reduceMotion]);

  return (
    <span ref={ref}>
      {/* Screen reader ko seedha final value milti hai */}
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <span aria-hidden="true" className="tabular-nums">
        {value}
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <Section className="bg-ink text-white">
      <section aria-labelledby="stats-heading">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e5c49e]">
            At a glance
          </p>
          <h2
            id="stats-heading"
            className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl"
          >
            Every occasion, <span className="text-light-gold">every plate</span>
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-light-gold to-transparent"
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <Reveal as="li" key={stat.label} delay={i * 0.1} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-light-gold/40 hover:bg-white/[0.06] md:p-8">
                  {/* top accent line */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-light-gold/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-light-gold/30 bg-light-gold/10 text-light-gold">
                    <Icon />
                  </div>

                  <div className="mt-6 min-h-[3.75rem] md:min-h-[4.5rem]">
                    {stat.badges ? (
                      <div className="flex flex-wrap items-center gap-2.5 pt-2">
                        <FoodMark color="#4caf50" label="Veg" />
                        <FoodMark color="#e5534b" label="Non-veg" />
                      </div>
                    ) : (
                      <p className="font-serif text-5xl font-medium leading-none text-light-gold md:text-6xl">
                        <CountUp to={stat.value} suffix={stat.suffix} />
                      </p>
                    )}
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.17em] text-[#e5c49e]">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#bdb4aa]">{stat.note}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>
    </Section>
  );
}