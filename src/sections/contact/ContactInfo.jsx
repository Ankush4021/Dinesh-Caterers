import { Phone, Mail } from 'lucide-react';

import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Button from '../../components/Button.jsx';

const methods = [
  { icon: Phone, label: 'CALL US', value: '+91 96341 85883', href: 'tel:+919634185883' },
   {icon: Phone, label: 'CALL US', value: '+91 96900 70133', href: 'tel:+919690070133' },
  { icon: Mail, label: 'EMAIL', value: 'support.dineshcaterers@gmail.com', href: 'mailto:support.dineshcaterers@gmail.com' },
];

const whatsappLink =
  'https://wa.me/919634185883?text=Hello%20Dinesh%20Caterers%2C%20I%27d%20like%20to%20discuss%20an%20event.';

export default function ContactInfo() {
  return (
    <Reveal x={-40} y={0} className="max-w-[520px] space-y-6">
      <SectionHeading
        label="START A CONVERSATION"
        title="We'd be happy"
        accent="to hear from you."
      />

      <p className="leading-[1.9] text-muted">
        Whether you’re planning a wedding, a family function, a pooja or a
        corporate event, reach out to discuss the details. We can talk through
        vegetarian and non-vegetarian menu options.
      </p>

      <div className="grid gap-4">
        {methods.map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#e0d4c6] text-[#9d7048]">
              <Icon size={18} />
            </span>

            <div className="min-w-0">
              <small className="mb-1 block text-[10px] tracking-[0.15em] text-[#95887a]">
                {label}
              </small>
              <b className="break-all text-[15px] font-semibold">{value}</b>
            </div>
          </a>
        ))}
      </div>

      <Button href={whatsappLink}>Enquire on WhatsApp</Button>
    </Reveal>
  );
}
