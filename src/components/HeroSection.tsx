import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const HeroSection = () => {
  const { t } = useLanguage();
  const stats = [
    { num: t("hero_stat1_num"), label: t("hero_stat1_label") },
    { num: t("hero_stat2_num"), label: t("hero_stat2_label") },
    { num: t("hero_stat3_num"), label: t("hero_stat3_label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 py-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={heroBanner}
              alt="Ready for Tomorrow - Ready Gen"
              className="relative rounded-2xl shadow-2xl w-full object-cover border border-border/30"
            />
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary animate-fade-up">
            {t("hero_badge")}
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="px-8 py-6 text-lg rounded-xl">
                {t("hero_start")}
              </Button>
            </a>
            <a href="#courses">
              <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg rounded-xl">
                {t("hero_explore")}
              </Button>
            </a>
          </div>

          <div className="flex gap-8 pt-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-secondary">{s.num}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
