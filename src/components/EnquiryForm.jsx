import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

import { buildWhatsAppLink } from '../utils/whatsapp.js';

const eventTypes = [
  'Wedding',
  'Corporate event',
  'Pooja / Satvik event',
  'Birthday / Gathering',
  'Other',
];

const foodTypes = ['Vegetarian', 'Non-vegetarian', 'Both'];

const inputClass =
  'w-full border border-[#d8c9b8] bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-[#a79b8d] focus:border-gold';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a7a68]">
        {label}
      </span>
      {children}
    </label>
  );
}

// Form bharne par WhatsApp khulta hai, message pehle se likha hua.
export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: '',
    event: '',
    date: '',
    guests: '',
    food: '',
    note: '',
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Jo field khali hai wo message mein nahi jaayegi.
    const details = [
      `Name: ${form.name}`,
      `Event: ${form.event}`,
      form.date && `Date: ${form.date}`,
      form.guests && `Guests: ${form.guests}`,
      form.food && `Food: ${form.food}`,
      form.note && `Note: ${form.note}`,
    ].filter(Boolean);

    const message = `Hello Dinesh Caterers, I’d like to enquire about catering.\n\n${details.join('\n')}`;

    window.open(buildWhatsAppLink(message), '_blank', 'noopener');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-cream p-6 text-ink shadow-2xl sm:p-8"
    >
      <div>
        <h3 className="font-serif text-2xl font-semibold">
          Send your enquiry
        </h3>
        <p className="mt-1 text-sm text-muted">
          Fill the details and we’ll continue the chat on WhatsApp.
        </p>
      </div>

      <Field label="Your name *">
        <input
          name="name"
          value={form.name}
          onChange={update}
          required
          placeholder="Enter your name"
          className={inputClass}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Event type *">
          <select
            name="event"
            value={form.event}
            onChange={update}
            required
            className={inputClass}
          >
            <option value="" disabled>
              Select event
            </option>
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>

        <Field label="Food preference">
          <select
            name="food"
            value={form.food}
            onChange={update}
            className={inputClass}
          >
            <option value="">Select (optional)</option>
            {foodTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>

        <Field label="Event date">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={update}
            min={new Date().toISOString().split('T')[0]}
            className={inputClass}
          />
        </Field>

        <Field label="Approx. guests">
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={update}
            min="1"
            placeholder="e.g. 150"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Anything else?">
        <textarea
          name="note"
          value={form.note}
          onChange={update}
          rows={3}
          placeholder="Venue, menu ideas, special requests..."
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 bg-[#267b50] px-6 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#1f6843]"
      >
        <MessageCircle size={18} />
        Send on WhatsApp
      </button>
    </form>
  );
}
