import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import courseAiBasicsPrompting from "@/assets/course-ai-basics-prompting.png";
import courseBusinessMarketing from "@/assets/course-business-marketing.png";
import courseContentCreation from "@/assets/course-content-creation.png";
import courseDigitalMarketing from "@/assets/course-digital-marketing.png";
import courseGraphicDesign from "@/assets/course-graphic-design-new.png";
import coursePublicSpeakingSoftSkills from "@/assets/course-public-speaking-soft-skills.png";
import courseScholarship from "@/assets/course-scholarship-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const CoursesSection = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: t("course_ai_basics_prompting"),
      image: courseAiBasicsPrompting,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20AI%20Basics%20and%20Prompting%20course",
    },
    {
      title: t("course_business_marketing"),
      image: courseBusinessMarketing,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Business%20%26%20Marketing%20course",
    },
    {
      title: t("course_content_creation"),
      image: courseContentCreation,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Content%20Creation%20course",
    },
    {
      title: t("course_digital_marketing"),
      image: courseDigitalMarketing,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Digital%20Marketing%20course",
    },
    {
      title: t("course_graphic_design"),
      image: courseGraphicDesign,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Graphic%20Design%20course",
    },
    {
      title: t("course_public_speaking_soft_skills"),
      image: coursePublicSpeakingSoftSkills,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Public%20Speaking%20%26%20Soft%20Skills%20course",
    },
    {
      title: t("course_scholarship_course"),
      image: courseScholarship,
      wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Scholarship%20course",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            {t("courses_title_1")} <span className="text-gradient">{t("courses_title_2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("courses_subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {courses.map((c) => (
            <div
              key={c.title}
              className="card-glow group bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-center">{c.title}</h3>
                <a href={c.wa} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full rounded-xl gap-2">
                    {t("courses_whatsapp")} <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
