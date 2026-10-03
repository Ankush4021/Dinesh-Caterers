import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';

export default function Intro() {
  return (
    <Section className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-[10%]">
      <Reveal x={-40} y={0} className="relative pb-8 pl-6 sm:pl-7">
        {/* Peeche wali border frame */}
        <div className="absolute left-0 top-7 h-[83%] w-3/4 border border-[#cdb99f]" />

        <img
          src="/assets/images/AboutImg.webp"
          alt="Food and event hospitality by Dinesh Caterers"
          loading="lazy"
          className="relative block h-[300px] w-full object-cover sm:h-[370px] lg:h-[460px] rounded"
        />

        <span className="absolute bottom-0 right-0 bg-cream px-4 py-3 text-[9px] uppercase tracking-[0.09em] text-[#766b5e] sm:px-5 sm:py-4 sm:text-[11px]">
          A personal touch in every detail
        </span>
      </Reveal>

      <Reveal x={40} y={0} className="max-w-[520px] space-y-5">
        <SectionHeading
          label="A LITTLE ABOUT US"
          title="Good food brings"
          accent="people closer."
        />

        <p className="text-lg leading-[1.7] text-[#403a34] lg:text-[19px]">
          Every gathering deserves food that feels special and service that
          feels effortless.
        </p>

        <p className="leading-[1.9] text-muted">
          From weddings and family celebrations to poojas and corporate events,
          Dinesh Caterers helps bring people together over food they love. Our
          team works with your preferences to plan menus and service with care,
          freshness and hygiene in mind.
        </p>

        <Button variant="outline" to="/about">
          Get to know us
        </Button>
      </Reveal>
    </Section>
  );
}
