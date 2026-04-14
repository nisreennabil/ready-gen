import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Summer%20Courses";

const PopupNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative mx-4 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-border">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
        >
          <X className="w-5 h-5 text-primary-foreground" />
        </button>

        <div className="bg-primary p-10 text-center space-y-6">
          <div className="space-y-2">
            <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest">
              🔥 Limited Time
            </p>
            <h3 className="text-3xl font-black text-primary-foreground leading-tight">
              Summer Courses Starting Soon
            </h3>
          </div>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" className="rounded-xl gap-2 px-8 py-5 text-base mt-2">
              WhatsApp Us <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupNotification;
