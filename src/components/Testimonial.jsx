import { Star } from 'lucide-react';

import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { reviews, googleProfile } from '../data/reviews.js';

// Ek review card
function ReviewCard({ review }) {
  return (
    <figure className="mr-5 flex w-[300px] shrink-0 flex-col justify-between border border-[#e4d8ca] bg-cream p-6 sm:w-[370px]">
      <div>
        <div className="flex gap-0.5 text-gold" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <blockquote className="mt-4 line-clamp-6 text-[15px] leading-[1.8] text-[#403a34]">
          “{review.text}”
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-[#eadfd2] pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-serif text-lg text-white">
          {review.name.charAt(0).toUpperCase()}
        </span>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{review.name}</p>
          <p className="truncate text-xs text-muted">
            {review.event ? `${review.event} · ` : ''}Google review
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

// Ek scrolling row. Content 2 baar repeat hota hai taaki loop seamless ho.
function MarqueeRow({ items, reverse = false }) {
  // Kam reviews hon to bhi row bhari dikhe
  let base = items;
  while (base.length < 6) base = [...base, ...items];

  const loop = [...base, ...base];

  return (
    <div className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
      <div
        className={`flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${base.length * 7}s` }}
      >
        {loop.map((review, i) => (
          <ReviewCard key={`${i}-${review.name}`} review={review} />
        ))}
      </div>
    </div>
  );
}

// Kisi bhi page par use karo: <Testimonials />
// Text badalna ho: <Testimonials label="..." title="..." accent="..." />
export default function Testimonials({
  label = 'WHAT OUR CLIENTS SAY',
  title = 'Loved by families,',
  accent = 'trusted by hosts.',
}) {
  if (!reviews.length) return null;

  // 8 ya zyada reviews ho to 2 rows, warna 1
  const twoRows = reviews.length >= 8;
  const rowOne = twoRows ? reviews.filter((_, i) => i % 2 === 0) : reviews;
  const rowTwo = twoRows ? reviews.filter((_, i) => i % 2 === 1) : [];

  return (
    <Section className="bg-mist">
      <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading label={label} title={title} accent={accent} />

        {/* Rating badge: tabhi dikhega jab reviews.js mein rating aur total bhare ho */}
        {googleProfile.rating && googleProfile.total && (
          <div className="flex items-center gap-4">
            <span className="font-serif text-5xl font-medium">
              {googleProfile.rating}
            </span>

            <div>
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted">
                {googleProfile.total}+ reviews on Google
              </p>
            </div>
          </div>
        )}
      </Reveal>

      {/* Negative margin se rows poori screen width tak phailti hain */}
      <div className="-mx-5 space-y-5 sm:-mx-8 lg:-mx-[8%]">
        <MarqueeRow items={rowOne} />
        {twoRows && <MarqueeRow items={rowTwo} reverse />}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Button variant="outline" href={googleProfile.url}>
          See all reviews on Google
        </Button>
      </Reveal>
    </Section>
  );
}