import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20Bella%20Brow%20Studio";

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-4 shadow-luxe hover:scale-105 transition-transform duration-300"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Agendar</span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
