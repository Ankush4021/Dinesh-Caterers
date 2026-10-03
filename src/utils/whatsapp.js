// WhatsApp number ek hi jagah. Number badalna ho to sirf yahan badlo.
export const WHATSAPP_NUMBER = '919634185883';

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
