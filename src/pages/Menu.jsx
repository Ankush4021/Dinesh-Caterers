
import { useState } from 'react';

import PageTransition from '../components/PageTransition.jsx';
import PageHero from '../components/PageHero.jsx';
import CTABand from '../sections/home/CTABand.jsx';
import MenuCategory from '../sections/menu/MenuCategory.jsx';
import { menuCategories } from '../data/menuData.js';
import CustomMenuMarquee from '../sections/menu/CustomMenuMarquee.jsx';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filters = [
    { label: 'All', value: 'all' },
    ...menuCategories.map((category) => ({
      label: category.title,
      value: category.id,
    })),
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? menuCategories
      : menuCategories.filter(
          (category) => category.id === activeCategory
        );

  return (
    <PageTransition>
      <PageHero
        label="OUR MENU"
        title="A feast for"
        accent="every occasion."
        text="From familiar favourites to regional specialities, discover food made to bring people together."
        image="/assets/menu/PaneerTikka.webp"
        imagePosition="center"
        overlay="from-ink/85 via-ink/55 to-ink/20"
        primaryCta={{
          label: 'Explore the menu',
          href: '#menu-selections',
          variant: 'light',
        }}
        secondaryCta={{
          label: 'Plan your event',
          to: '/contact',
          variant: 'ghost',
        }}
      />

      <CustomMenuMarquee />

      <section
        id="menu-selections"
        className="bg-[#f8f5f0] px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#a17b4b]">
            Crafted for your celebration
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-[#30271f] sm:text-5xl">
            Thoughtful menus. Memorable moments.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#746b61] sm:text-base">
            Explore a variety of flavours and discover the menu
            that fits your celebration.
          </p>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveCategory(filter.value)}
                  aria-pressed={isActive}
                  className={`border px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                    isActive
                      ? 'border-[#514537] bg-[#514537] text-white'
                      : 'border-[#d9cfc2] bg-transparent text-[#514537] hover:border-[#514537]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-[#f8f5f0]">
        {filteredCategories.map((category, index) => (
          <MenuCategory
            key={category.id}
            category={category}
            index={index}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <CTABand />
    </PageTransition>
  );
}
