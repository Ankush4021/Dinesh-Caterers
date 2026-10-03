import PageTransition from '../components/PageTransition.jsx';
import PageHero from '../components/PageHero.jsx';
import Story from '../sections/about/Story.jsx';
import Values from '../sections/about/Values.jsx';
import Stats from '../sections/about/Stats.jsx';
import EventTypes from '../sections/about/EventTypes.jsx';
import CTABand from '../sections/home/CTABand.jsx';

export default function About() {
  return (
    <PageTransition>
      <PageHero
        label="OUR STORY"
        title="Food made for"
        accent="bringing people together."
        text="A passion for authentic flavours, heartfelt hospitality and creating memorable experiences for every occasion."
        imagePosition="center"
        primaryCta={{
          label: 'Explore our services',
            to: '/services',
        }}
        secondaryCta={{
          label: 'Get in touch',
          to: '/contact',
        }}
      />
      <Story />
      {/* <Stats /> */}
      <Values />
      <EventTypes />
      <CTABand 
        eyebrow="CATERING"
    title="Shaadi ka plan ho raha hai?"
    highlight="Baaki humpe chhod do."
    buttonLabel="Get a Quote"
    to="/contact"
      />
    </PageTransition>
  );
}
