import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            {t("testimonials_title_1")} <span className="text-gradient">{t("testimonials_title_2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("testimonials_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {[review1, review2].map((img, i) => (
            <div
              key={i}
              className="card-glow bg-card border border-border rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Student review ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-glow bg-card border border-border rounded-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/9tI8HkyJ2rg"
              title="Ready Gen Student Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
