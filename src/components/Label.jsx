// Heading ke upar chhota text, jaise "OUR STORY" (pehle isko eyebrow bola tha).
export default function Label({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.17em] ${
        light ? 'text-[#e5c49e]' : 'text-gold'
      }`}
    >
      <span className="h-px w-7 bg-current" />
      {children}
    </div>
  );
}
