import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20know%20more%20about%20Ready%20Gen";

const WhatsAppFloat = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-300 hover:scale-105 font-semibold text-sm"
    >
      <MessageCircle className="w-5 h-5" />
      Chat with us
    </a>
  );
};

export default WhatsAppFloat;
