import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx'; // apne folder ke hisaab se path adjust kar lena

export default function CTABand({
  eyebrow = 'LET’S TALK',
  title = 'Planning an event?',
  highlight = 'Let’s make it memorable.',
  buttonLabel = 'Contact Us',
  to = '/contact',
}) {
  const className =
    'inline-flex items-center gap-2 bg-[#342c24] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-sand transition duration-300 hover:bg-[#9b6d43] hover:shadow-lg active:scale-95';

  // Internal route ho to Link, warna normal <a> (tel:, mailto:, https:// ke liye)
  const isExternal = /^(https?:|tel:|mailto:)/.test(to);

  return (
    <section className="bg-sand px-5 py-14 text-center lg:py-20">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
        <small className="text-[10px] tracking-[0.18em] text-[#75695c]">
          {eyebrow}
        </small>

        <h2 className="my-4 font-serif text-[clamp(27px,3.5vw,42px)] font-medium leading-[1.3] text-[#342c24]">
          {title}
          <br />
          <em className="text-[#9b6d43]">{highlight}</em>
        </h2>

        <span className="mb-7 h-px w-12 bg-gold" />

        {isExternal ? (
          <a href={to} className={className}>
            {buttonLabel}
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <Link to={to} className={className}>
            {buttonLabel}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </Reveal>
    </section>
  );
}