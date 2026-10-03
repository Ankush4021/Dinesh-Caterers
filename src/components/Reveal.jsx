import { motion, useReducedMotion } from 'framer-motion';

// Scroll karne par fade + slide animation.
// once: false => jitni baar section screen par aayega, utni baar animate hoga.
// x / y se direction control hoti hai (default: neeche se upar).
export default function Reveal({
  children,
  className = '',
  delay = 0,
  x = 0,
  y = 40,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
