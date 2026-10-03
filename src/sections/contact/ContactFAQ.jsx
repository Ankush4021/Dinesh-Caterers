
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';

import Section from '../../components/Section.jsx';
import Reveal from '../../components/Reveal.jsx';

const faqs = [
  {
    q: 'How can I enquire or book catering for my event?',
    a: 'Call us on +91 96341 85883 or message us on WhatsApp with your event type, date, venue and approximate number of guests. You can also use the contact form on this page. We will get back to you to discuss the menu and details.',
  },
  {
    q: 'Do you serve both vegetarian and non-vegetarian food?',
    a: 'Yes, we cater both vegetarian and non-vegetarian menus. Tell us what your guests prefer and we will plan the menu around it.',
  },
  {
    q: 'Can the menu be customized?',
    a: 'Yes. Every event is different, so we build the menu around your taste, occasion and guests. Indian, South Indian, Chinese, Punjabi, Garhwali and sweets are all part of what we offer.',
  },
  {
    q: 'Do you provide satvik food without onion and garlic?',
    a: 'Yes, we prepare satvik catering for poojas, havans and religious functions, without onion and garlic, while keeping the taste authentic.',
  },
  {
    q: 'What kinds of events do you cater?',
    a: 'Weddings, engagements and receptions, corporate events, birthdays and anniversaries, poojas and religious functions, community gatherings, and outdoor events with live counters.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We are based in Doiwala, Dehradun, Uttarakhand, and serve events in Dehradun and nearby areas. If your venue is outside Dehradun, just ask us and we will confirm.',
  },
  {
    q: 'Do you offer live counters?',
    a: 'Yes. We can set up live counters such as chaat, tandoor, South Indian, pasta and Chinese stations for weddings, festivals and community events.',
  },
  {
    q: 'How will I know the price?',
    a: 'Pricing depends on your menu, the number of guests, the venue and the service style. Share these details with us and we will discuss options that suit your budget.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion();
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-ink/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:py-7"
        >
          <span
            className={`max-w-4xl font-serif text-lg leading-snug tracking-tight transition-colors duration-300 md:text-2xl ${
              isOpen
                ? 'text-gold'
                : 'text-ink group-hover:text-gold'
            }`}
          >
            {item.q}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? 'rotate-45 border-gold bg-gold text-white'
                : 'border-ink/20 text-ink group-hover:border-gold group-hover:text-gold'
            }`}
          >
            <Plus size={18} strokeWidth={1.5} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 pr-12 text-sm leading-8 text-muted md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Section>
      <section aria-labelledby="faq-heading">
        <div className="mx-auto w-full max-w-5xl">
          {/* Heading */}
          <Reveal>
            <div className="mb-14 text-center md:mb-20">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Questions & Answers
                </span>
                <span className="h-px w-8 bg-gold" />
              </div>

              <h2
                id="faq-heading"
                className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl"
              >
                Things people{' '}
                <span className="italic text-gold">
                  often ask.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted md:text-base">
                Find answers to common questions about our catering,
                menus and event services.
              </p>
            </div>
          </Reveal>

          {/* FAQ Rows */}
          <Reveal delay={0.1}>
            <div className="border-t border-ink/15">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(
                      openIndex === index ? -1 : index
                    )
                  }
                />
              ))}
            </div>
          </Reveal>

          {/* Bottom contact note */}
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted">
                Still have questions?
              </p>
              <a
                href="https://wa.me/919634185883"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 border-b border-gold pb-1 font-medium text-ink transition-colors hover:text-gold"
              >
                Talk to our team
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Section>
  );
}
