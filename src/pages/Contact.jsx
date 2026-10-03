import PageTransition from '../components/PageTransition.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import ContactInfo from '../sections/contact/ContactInfo.jsx';
import Locations from '../sections/contact/Locations.jsx';
import ContactFAQ from '../sections/contact/ContactFAQ.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Contact() {
  return (
    <PageTransition>
      <PageHero
        label="CONTACT DINESH CATERERS"
        title="Tell us what"
        accent="you're celebrating."
        text="Tell us about your upcoming celebration. We would love to help you plan a catering experience that feels truly yours."
        image="/assets/images/ContactUsBackgroundImg.webp"
        imagePosition="center"
        primaryCta={{
          label: 'Call us',
          href: 'tel:+919634185883',
        }}
        secondaryCta={{
          label: 'WhatsApp us',
          href: 'https://wa.me/919634185883',
          variant: 'ghost',
        }}
      
      />

      <Section className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[12%]">
        <ContactInfo />
        <Locations />
      </Section>
      <CTASection />
        <ContactFAQ />
    </PageTransition>
  );
}
