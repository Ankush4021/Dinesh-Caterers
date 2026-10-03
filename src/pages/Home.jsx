import PageTransition from '../components/PageTransition.jsx';

import Hero from '../sections/home/Hero.jsx';
import Intro from '../sections/home/Intro.jsx';
import ServicesPreview from '../sections/home/ServicesPreview.jsx';
import ApproachPreview from '../sections/home/ApproachPreview.jsx';
import Benefits from '../sections/home/Benefits.jsx';
import MenuFeature from '../sections/home/MenuFeature.jsx';
import QuoteBand from '../sections/home/CTABand.jsx';
import HomeCTA from '../sections/home/HomeCTA.jsx';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Intro />
      <ServicesPreview />
      <ApproachPreview />
      <Benefits />
      <MenuFeature />
      <HomeCTA />
      {/* <QuoteBand /> */}
    </PageTransition>
  );
}
