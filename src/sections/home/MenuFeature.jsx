import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';

export default function MenuFeature() {
  return (
    <Section className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[12%]">
      <Reveal x={-40} y={0} className="max-w-[480px] space-y-6">
        <SectionHeading
          label="A MENU WITH MEANING"
          title="Familiar flavors."
          accent="Fresh possibilities."
        />

        <p className="leading-[1.9] text-muted">
          From Indian favorites and regional specialties to live counters and
          desserts, let's plan a menu that suits your occasion and your guests.
        </p>

        <Button variant="outline" to="/contact">
          Discuss your menu
        </Button>
      </Reveal>

      <Reveal x={40} y={0} className="relative h-[290px] sm:h-[340px] lg:h-[420px]">
        <img
          src="/assets/menu/KadhaiPaneer.webp"
          alt="Kadhai paneer menu inspiration"
          loading="lazy"
          className="absolute left-0 top-0 h-[87%] w-[72%] object-cover rounded"
        />

        <img
          src="/assets/menu/GulabJamun.webp"
          alt="Gulab jamun dessert"
          loading="lazy"
          className="absolute bottom-0 right-0 h-[52%] w-[39%] border-[6px] border-cream object-cover lg:border-[9px] rounded"
        />
      </Reveal>
    </Section>
  );
}
