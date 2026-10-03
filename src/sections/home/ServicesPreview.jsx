import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import Button from '../../components/Button.jsx';
import { services } from '../../data/services.js';

export default function ServicesPreview() {
  return (
    <Section className="bg-mist">
      <Reveal className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
        <SectionHeading
          label="WHAT WE DO"
          title="Every occasion,"
          accent="beautifully served."
        />

        <p className="max-w-[390px] leading-[1.85] text-muted">
          From intimate family moments to larger celebrations, we create
          catering experiences that feel personal, seamless and full of flavor.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
        {services.slice(0, 4).map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <ServiceCard item={item} index={i} />
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
