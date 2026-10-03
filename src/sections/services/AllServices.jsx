import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import { services } from '../../data/services.js';

export default function AllServices() {
  return (
    <Section>
      <Reveal className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
        <SectionHeading
          label="HOW WE CAN HELP"
          title="Made around"
          accent="your occasion."
        />

        <p className="max-w-[390px] leading-[1.85] text-muted">
          Choose a service to start the conversation. We’ll discuss the menu,
          guest count, venue and service style with you.
        </p>
      </Reveal>

      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.1}>
            <ServiceCard item={item} index={i} wide />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
