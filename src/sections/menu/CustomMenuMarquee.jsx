
import { motion, useReducedMotion } from 'framer-motion';

const messages = [
  'Your menu, your way',
  'Curated around your taste',
  'Personalised for your celebration',
  'Every dish, your choice',
];

export default function CustomMenuMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Customisable menu options"
      className="overflow-hidden border-y border-[#e6d9c7] bg-[#eee6da] py-5 sm:py-6"
    >
      <p className="sr-only">
        Create a customised menu with dishes selected to suit your
        preferences and celebration.
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex w-max shrink-0 items-center"
          animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 32,
                  ease: 'linear',
                  repeat: Infinity,
                }
          }
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden="true"
              className="flex shrink-0 items-center"
            >
              {messages.map((message) => (
                <div
                  key={`${copy}-${message}`}
                  className="flex shrink-0 items-center gap-8 px-5 sm:gap-12 sm:px-8"
                >
                  <span className="whitespace-nowrap font-serif text-xl italic text-[#514537] sm:text-2xl">
                    {message}
                  </span>

                  <span className="h-2 w-2 shrink-0 rotate-45 bg-[#b18a56]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
