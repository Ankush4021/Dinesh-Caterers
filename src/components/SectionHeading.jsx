import Label from './Label.jsx';

// Label + bada heading. accent wali line gold italic mein dikhti hai.
export default function SectionHeading({ label, title, accent, light = false }) {
  return (
    <div>
      <Label light={light}>{label}</Label>

      <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.15] tracking-tight md:text-5xl lg:text-[56px]">
        {title}
        <br />
        <em className={light ? 'text-light-gold' : 'text-gold'}>{accent}</em>
      </h2>
    </div>
  );
}
