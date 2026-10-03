import PageTransition from '../components/PageTransition.jsx';
import PageHero from '../components/PageHero.jsx';
import AllServices from '../sections/services/AllServices.jsx';
import CTABand from '../sections/home/CTABand.jsx';
import Benefits from '../sections/home/Benefits.jsx';

export default function Services() {
  return (
    <PageTransition>
      <PageHero
        label="OUR CATERING SERVICES"
        title="Good food for"
        accent="every kind of gathering."
        text="From intimate gatherings to grand celebrations, we bring thoughtful menus and warm hospitality to your special moments."
        image="/assets/images/servicesBackgroundImg.webp"
        imagePosition="center"
        primaryCta={{
          label: 'Plan your menu',
          to: '/contact',
        }}
        secondaryCta={{
          label: 'Check Menu',
          to: '/menu',
        }}
      />
      <AllServices />
      <Benefits />
      
      <CTABand />
    </PageTransition>
  );
}
