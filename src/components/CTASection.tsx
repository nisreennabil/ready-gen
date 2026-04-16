import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(228_100%_52%_/_0.12),transparent_70%)]" />

      <div className="container relative z-10 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          {t("cta_title_1")} <span className="text-gradient">{t("cta_title_2")}</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">{t("cta_subtitle")}</p>
        <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="px-12 py-7 text-lg rounded-xl animate-pulse-glow mt-4">
            {t("cta_button")}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
