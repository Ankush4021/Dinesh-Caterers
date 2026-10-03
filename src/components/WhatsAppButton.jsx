import { MessageCircle } from 'lucide-react';

const message = "Hello Dinesh Caterers, I'd like to discuss an event.";
const link = `https://wa.me/919634185883?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Dinesh Caterers on WhatsApp"
      className="fixed bottom-4 right-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-[#267b50] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1f6843] md:bottom-6 md:right-6 md:h-[52px] md:w-[52px]"
    >
      <MessageCircle size={22} />
    </a>
  );
}
