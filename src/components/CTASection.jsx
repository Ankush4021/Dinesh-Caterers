import { Check } from 'lucide-react';

import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import EnquiryForm from './EnquiryForm.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const points = [
  '25+ years of catering experience',
  'Vegetarian and non-vegetarian menus',
  'Serving Dehradun & Doiwala',
];

// Kisi bhi page par use karo: <CTASection />
// Text badalna ho to props do: <CTASection label="..." title="..." accent="..." text="..." />
export default function CTASection({
  label = 'LET’S START PLANNING',
  title = 'What are you',
  accent = 'celebrating next?',
  text = 'Tell us about your event and we’ll help you plan the menu, service and everything in between.',
}) {
  return (
    <Section className="relative isolate grid items-center gap-12 overflow-hidden bg-ink text-white lg:grid-cols-[1fr_0.9fr] lg:gap-[8%]">
      {/* Peeche halki si image */}
      {/* <div className="absolute inset-0 -z-10 bg-[url('/assets/images/FooterBackgroundImg.webp')] bg-cover bg-center opacity-20" /> */}

      <Reveal x={-40} y={0} className="space-y-6">
        <SectionHeading light label={label} title={title} accent={accent} />

        <p className="max-w-[480px] text-base leading-[1.85] text-[#d1c7bc] md:text-[17px]">
          {text}
        </p>

        <ul className="grid gap-3">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-[15px] text-[#e7ddd0]">
              <Check size={16} className="shrink-0 text-light-gold" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            variant="light"
            href={buildWhatsAppLink('Hello Dinesh Caterers, I’d like to discuss an event.')}
          >
            Chat on WhatsApp
          </Button>

          <Button variant="ghost" href="tel:+919634185883">
            Call us
          </Button>
        </div>
      </Reveal>

      <Reveal x={40} y={0}>
        <EnquiryForm />
      </Reveal>
    </Section>
  );
}
