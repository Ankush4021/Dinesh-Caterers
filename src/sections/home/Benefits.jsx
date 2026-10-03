import { Heart, Utensils, Sparkles, Leaf } from 'lucide-react';

import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';

const benefits = [
  {
    icon: Utensils,
    title: 'Menus that fit your event',
    text: 'We shape the food around your occasion, guest count and preferences.',
  },
  {
    icon: Heart,
    title: 'Warm, attentive service',
    text: 'A considerate team that looks after the details while you enjoy the day.',
  },
  {
    icon: Leaf,
    title: 'Veg and non-veg options',
    text: 'Flexible menu conversations for different tastes and event requirements.',
  },
  {
    icon: Sparkles,
    title: 'Tradition with a fresh touch',
    text: 'Familiar flavors, thoughtful presentation and a personal approach.',
  },
];

export default function Benefits() {
  return (
    <Section>
      <Reveal className="mb-10">
        <SectionHeading
          label="WHY WORK WITH US"
          title="Thoughtful food."
          accent="People-first service."
        />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1} className="border-t border-[#d8c9b8] pt-5">
            <Icon size={20} className="text-[#a77a4e]" />
            <h3 className="mb-2 mt-4 font-serif text-xl font-semibold">{title}</h3>
            <p className="text-[15px] leading-[1.8] text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
