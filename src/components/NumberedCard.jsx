import Reveal from './Reveal.jsx';

// About ke values aur Approach ke steps dono mein use hota hai.
export default function NumberedCard({ number, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="border-t border-[#d4c3b0] pt-5">
      <span className="text-xs tracking-[0.12em] text-[#a77a4e]">{number}</span>
      <h3 className="mb-2.5 mt-4 font-serif text-2xl font-semibold">{title}</h3>
      <p className="max-w-[350px] text-[15px] leading-[1.8] text-muted">{text}</p>
    </Reveal>
  );
}
