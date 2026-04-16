import brandChoose from "@/assets/brand-choose.jpg";
import brandProject from "@/assets/brand-project.jpg";
import brandSkills from "@/assets/brand-skills.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueSection = () => {
  const { t } = useLanguage();

  const values = [
    { title: t("value_1_title"), desc: t("value_1_desc"), image: brandSkills },
    { title: t("value_2_title"), desc: t("value_2_desc"), image: brandProject },
    { title: t("value_3_title"), desc: t("value_3_desc"), image: brandChoose },
  ];

  return (
    <section id="value" className="py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            {t("value_title_1")} <span className="text-gradient">{t("value_title_2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("value_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="card-glow group relative bg-card border border-border rounded-2xl overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
