import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';

export default function Story() {
  return (
    <Section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[10%]">
      <Reveal x={-40} y={0} className="relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[520px]">
        <img
          src="/assets/images/Founder Dinesh Caterers.webp"
          alt="Dinesh Caterers founder and team"
          loading="lazy"
          className="h-full w-full object-cover object-top overflow-hidden rounded"
        />

        {/* Neeche left mein badge */}
        <div className="absolute bottom-0 left-0 bg-ink px-6 py-5 text-white">
          <p className="font-serif text-4xl font-medium leading-none text-light-gold">
            25+
          </p>
          <p className="mt-2 text-[10px] tracking-[0.18em]">
            YEARS OF CATERING
          </p>
        </div>
      </Reveal>

      <Reveal x={40} y={0} className="max-w-[570px] space-y-5">
        <SectionHeading
          label="ABOUT DINESH CATERERS"
          title="Care in the kitchen."
          accent="Warmth at the table."
        />

        <p className="text-lg leading-[1.7] text-[#403a34] lg:text-[19px]">
          Food is one of the simplest ways to make people feel welcome.
        </p>

        <p className="leading-[1.9] text-muted">
          At Dinesh Caterers, we help families, hosts and teams plan food for
          meaningful occasions. We believe good catering starts by listening
          and understanding the event, the guests and the experience you want
          to create.
        </p>

        <p className="leading-[1.9] text-muted">
          Based in the Doiwala and Dehradun area, we cater for weddings,
          poojas, corporate gatherings and celebrations. Our menu conversations
          can include vegetarian and non-vegetarian options.
        </p>

        <Button>Plan an event with us</Button>
      </Reveal>
    </Section>
  );
}