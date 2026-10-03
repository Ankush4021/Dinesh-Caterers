
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function MenuCategory({
  category,
  reverse = false,
  index = 0,
}) {
  const reduceMotion = useReducedMotion();

  if (!category?.id) {
    console.error('MenuCategory: category prop is missing.', category);
    return null;
  }

  const {
    id,
    eyebrow = '',
    title = '',
    description = '',
    image = '',
    imageAlt = '',
    groups = [],
    dishes = [],
  } = category;

  const menuGroups =
    groups.length > 0
      ? groups
      : dishes.length > 0
        ? [{ title: '', dishes }]
        : [];

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease,
      },
    },
  };

  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-[#e7dfd5] bg-[#f8f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Image and introduction */}
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
            reverse ? 'lg:[&>div:first-child]:order-2' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: false, amount: 0.25 }}
            className="group relative overflow-hidden rounded-sm"
          >
            {image ? (
              <motion.img
                src={image}
                alt={imageAlt || title}
                loading={index === 0 ? 'eager' : 'lazy'}
                whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                transition={{ duration: 0.7, ease }}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.nextElementSibling?.classList.remove(
                    'hidden'
                  );
                }}
                className="aspect-[4/3] w-full object-cover"
              />
            ) : null}

            <div
              className={`${
                image ? 'hidden' : ''
              } flex aspect-[4/3] w-full items-center justify-center bg-[#e9e1d6] text-center`}
            >
              <div>
                <span className="font-serif text-3xl text-[#76634d]">
                  {title}
                </span>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8b7965]">
                  Image coming soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: false, amount: 0.25 }}
            className="py-2"
          >
            {eyebrow && (
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#a17b4b]">
                {eyebrow}
              </span>
            )}

            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#30271f] sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            {description && (
              <p className="mt-5 max-w-xl text-sm leading-8 text-[#746b61] sm:text-base">
                {description}
              </p>
            )}

            <div className="mt-8 h-px w-full bg-[#e7dfd5]" />

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#a17b4b]">
              A selection of our offerings
            </p>
          </motion.div>
        </div>

        {/* Full-width dishes area */}
        <div className="mt-14 border-t border-[#e7dfd5] pt-10 sm:mt-16 sm:pt-12">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {menuGroups.map((group, groupIndex) => (
              <motion.div
                key={`${id}-${group.title || groupIndex}`}
                variants={reveal}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : (groupIndex % 3) * 0.08,
                  ease,
                }}
                className="min-w-0"
              >
                {group.title && (
                  <h3 className="mb-5 font-serif text-xl font-medium text-[#514537] sm:text-2xl">
                    {group.title}
                  </h3>
                )}

                <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {group.dishes.map((dish) => (
                    <li
                      key={dish}
                      className="flex items-start gap-3 text-sm leading-6 text-[#453b32] sm:text-[15px]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a17b4b]"
                      />
                      <span className="transition-colors duration-300 hover:text-[#a17b4b]">
                        {dish}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
