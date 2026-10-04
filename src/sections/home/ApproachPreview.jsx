import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';

export default function ApproachPreview() {
  return (
    <Section className="grid items-center gap-10 bg-ink text-white lg:grid-cols-2 lg:gap-[9%]">
      <Reveal x={-40} y={0} className="h-[340px] overflow-hidden lg:h-[520px]">
        <img
          src="/assets/images/LiveCounterImg.webp"
          alt="Live food counter at a catered event"
          loading="lazy"
          className="h-full w-full object-cover rounded"
        />
      </Reveal>

      <Reveal x={40} y={0} className="max-w-[550px] space-y-6">
        <SectionHeading
          light
          label="THE DINESH DIFFERENCE"
          title="Made with care."
          accent="Remembered for taste."
        />

        <p className="max-w-[480px] text-base leading-[1.85] text-[#d1c7bc] md:text-[17px]">
          Great catering is about more than what's on the plate. It's how the
          whole experience makes your guests feel.
        </p>

        <Button variant="light" to="/menu">
          Check Menu
        </Button>
      </Reveal>
    </Section>
  );
}
