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
          <div className="relative w-full group [perspective:1200px]">
            {/* Animated glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-secondary/30 to-primary/40 rounded-[2rem] blur-3xl animate-glow-pulse" />

            {/* Floating wrapper */}
            <div className="relative animate-hero-reveal">
              <div className="animate-hero-float">
                <div className="relative rounded-2xl overflow-hidden border border-secondary/30 shadow-[0_20px_80px_-15px_hsl(228_100%_52%_/_0.5)] transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]">
                  <img
                    src={heroBanner}
                    alt="Ready for Tomorrow - Ready Gen"
                    className="relative w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Shimmer sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
                </div>
              </div>
            </div>
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
