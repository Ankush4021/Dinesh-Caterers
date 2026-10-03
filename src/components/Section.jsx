// Har section ka same left-right aur upar-neeche spacing yahin se aati hai.
export default function Section({ children, className = '' }) {
  return (
    <section className={`px-5 py-16 sm:px-8 lg:px-[8%] lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
