import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Label from '../../components/Label.jsx';
import Button from '../../components/Button.jsx';

const ease = [0.22, 1, 0.36, 1];

// Heading mein ye words baari-baari se badalte rehte hain.
const changingWords = ['Flavor', 'Tradition', 'Warmth', 'Celebration'];

// Pehli line ke words
const firstLine = ['Weddings', 'to', 'poojas.'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Har 2.5 second mein next word
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % changingWords.length),
      2500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex h-[calc(100svh-112px)] max-h-[780px] min-h-[620px] items-center overflow-hidden bg-[#514537] px-5 text-white sm:px-8 lg:px-[8%]">
      {/* Background image: slowly zoom out hoti hai */}
      <motion.div
        className="absolute inset-0 -z-20 bg-[url('/assets/images/BGimage.webp')] bg-cover bg-[center_48%]"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="pb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Label light>A CATERING EXPERIENCE FOR EVERY OCCASION</Label>
        </motion.div>

        <h1 className="my-6 max-w-[800px] font-serif text-[clamp(43px,6.25vw,86px)] font-medium leading-[1.1] tracking-tight">
          {/* Line 1: har word neeche se slide hoke aata hai */}
          <span className="block">
            {firstLine.map((word, i) => (
              <span key={word} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>

          {/* Line 2: pehla word badalta rehta hai */}
          <span className="block">
            <span className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
              <AnimatePresence mode="wait">
                <motion.em
                  key={changingWords[index]}
                  className="inline-block text-light-gold"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-110%' }}
                  transition={{ duration: 0.5, ease }}
                >
                  {changingWords[index]}
                </motion.em>
              </AnimatePresence>
            </span>

            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              in every moment.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="max-w-[560px] text-[15px] leading-[1.8] text-[#f0e9e1] md:text-[17px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
        >
          Vegetarian and non-vegetarian catering with authentic taste,
          heartfelt service and care in every detail.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
        >
          <Button variant="light">Let’s plan your event</Button>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-sm transition-all hover:gap-5"
          >
            Explore our services
            <ArrowDownRight size={18} />
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
