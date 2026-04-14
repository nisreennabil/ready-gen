import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import coursePublicSpeaking from "@/assets/course-public-speaking.jpg";
import courseEntrepreneurship from "@/assets/course-entrepreneurship.jpg";
import courseScholarship from "@/assets/course-scholarship.jpg";
import courseGraphicDesign from "@/assets/course-graphic-design.jpg";
import courseSoftSkills from "@/assets/course-soft-skills.jpg";

const courses = [
  {
    title: "Public Speaking",
    image: coursePublicSpeaking,
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Public%20Speaking%20course",
  },
  {
    title: "Entrepreneurship",
    image: courseEntrepreneurship,
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Entrepreneurship%20course",
  },
  {
    title: "Scholarship",
    image: courseScholarship,
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Scholarship%20course",
  },
  {
    title: "Graphic Design",
    image: courseGraphicDesign,
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Graphic%20Design%20course",
  },
  {
    title: "Soft Skills",
    image: courseSoftSkills,
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Soft%20Skills%20course",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick your path to confidence. Every course transforms you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
                    WhatsApp Us <ArrowUpRight className="w-4 h-4" />
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
