import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';
import { services } from '../../data/services.js';

// Services ka data hi use hota hai, alag se kuch likhna nahi padta.
export default function EventTypes() {
  return (
    <Section>
      <Reveal className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
        <SectionHeading
          label="WHAT WE CATER"
          title="From poojas"
          accent="to weddings."
        />

        <p className="max-w-[390px] leading-[1.85] text-muted">
          Whatever the occasion, we plan the food and service around your
          guests and your day.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {services.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.1}>
            <Link
              to="/services"
              className="group relative block aspect-[4/5] overflow-hidden bg-[#ded3c5] sm:aspect-[4/3]"
            >
              <img
                src={`/assets/images/${item.image}`}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 font-serif text-lg font-semibold leading-tight text-white sm:text-xl">
                {item.title}
                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Button variant="outline" to="/services">
          Explore all services
        </Button>
      </Reveal>
    </Section>
  );
}