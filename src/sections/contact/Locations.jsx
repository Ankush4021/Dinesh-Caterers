import { MapPin, ArrowUpRight } from 'lucide-react';

import Reveal from '../../components/Reveal.jsx';
import Label from '../../components/Label.jsx';
import { locations } from '../../data/locations.js';

export default function Locations() {
  return (
    <Reveal x={40} y={0} className="grid gap-4">
      <Label>OUR LOCATIONS</Label>

      {locations.map((location, i) => (
        <article
          key={location.name}
          className="flex items-start gap-3 border border-[#e4d8ca] bg-[#f1ebe3] p-5 sm:gap-4 sm:p-6"
        >
          <span className="font-serif text-[22px] italic text-gold">
            {String(i + 1).padStart(2, '0')}
          </span>

          <div className="flex-1">
            <h3 className="mb-2 font-serif text-xl font-semibold">{location.name}</h3>
            <p className="mb-3 text-sm leading-[1.75] text-muted sm:text-[15px]">
              {location.address}
            </p>

            <a
              href={location.map}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#94683f]"
            >
              Open in Google Maps
              <ArrowUpRight size={15} />
            </a>
          </div>

          <MapPin size={20} className="shrink-0 text-[#a77a4e]" />
        </article>
      ))}
    </Reveal>
  );
}
