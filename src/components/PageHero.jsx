
import { motion, useReducedMotion } from 'framer-motion';

import Label from './Label.jsx';
import Button from './Button.jsx';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function PageHero({
  label,
  title,
  accent,
  text,

  // Background settings
  image = '/assets/images/AboutusBackgroundImg.webp',
  imagePosition = 'center',
  overlay = 'from-ink/85 via-ink/60 to-ink/20',

  // CTA settings
  primaryCta = null,
  secondaryCta = null,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[600px] h-[calc(100svh-112px)] max-h-[780px] items-center overflow-hidden bg-[#514537] px-5 py-16 text-white sm:px-8 lg:px-[8%]">

      {/* Background image */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundPosition: imagePosition,
        }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Image overlay */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-gradient-to-r ${overlay}`}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent"
      />

      {/* Hero content */}
      <motion.div
        className="relative max-w-[900px]"
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
      >
        {label && (
          <motion.div variants={item}>
            <Label light>{label}</Label>
          </motion.div>
        )}

        <motion.h1
          variants={item}
          className="my-6 font-serif text-[clamp(40px,5.8vw,78px)] font-medium leading-[1.1] tracking-tight"
        >
          {title}
          {accent && (
            <>
              <br />
              <em className="text-light-gold">{accent}</em>
            </>
          )}
        </motion.h1>

        {text && (
          <motion.p
            variants={item}
            className="max-w-[580px] text-[15px] leading-[1.8] text-[#f0e9e1] md:text-[17px]"
          >
            {text}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            {primaryCta && (
              <Button
                variant={primaryCta.variant || 'light'}
                to={primaryCta.to}
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Button>
            )}

            {secondaryCta && (
              <Button
                variant={secondaryCta.variant || 'ghost'}
                to={secondaryCta.to}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
