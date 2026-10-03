import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import NumberedCard from '../../components/NumberedCard.jsx';

const values = [
  {
    title: 'Listen first',
    text: 'We start with your occasion, preferences and practical requirements.',
  },
  {
    title: 'Respect every detail',
    text: 'Thoughtful planning helps the food and service fit smoothly into your event.',
  },
  {
    title: 'Serve with warmth',
    text: 'We want hosts and guests to feel welcomed and cared for.',
  },
];

export default function Values() {
  return (
    <Section className="bg-mist">
      <Reveal className="mb-10">
        <SectionHeading
          label="WHAT MATTERS TO US"
          title="Simple values."
          accent="Everyday practice."
        />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <NumberedCard
            key={v.title}
            number={String(i + 1).padStart(2, '0')}
            title={v.title}
            text={v.text}
            delay={i * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}
