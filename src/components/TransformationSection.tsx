import { useLanguage } from "@/contexts/LanguageContext";

const TransformationSection = () => {
  const { t } = useLanguage();

  const beforeItems = [t("before_1"), t("before_2"), t("before_3"), t("before_4")];
  const afterItems = [t("after_1"), t("after_2"), t("after_3"), t("after_4")];

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            {t("transformation_title_1")}{" "}
            <span className="text-gradient">{t("transformation_title_2")}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/15 text-destructive text-sm font-bold">
                {t("transformation_before")}
              </span>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glow bg-card border border-secondary/30 rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-bold">
                {t("transformation_after")}
              </span>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground font-medium">
                    <span className="text-secondary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
