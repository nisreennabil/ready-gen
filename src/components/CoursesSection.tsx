import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "Public Speaking",
    benefit: "Command attention. Speak with power. Become unforgettable.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Public%20Speaking%20course",
  },
  {
    title: "Entrepreneurship",
    benefit: "Think like a founder. Build ideas into reality.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Entrepreneurship%20course",
  },
  {
    title: "Problem Solving",
    benefit: "Think critically. Solve fast. Outperform everyone.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Problem%20Solving%20course",
  },
  {
    title: "Graphic Design",
    benefit: "Create stunning visuals. Design like a pro.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Graphic%20Design%20course",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {courses.map((c) => (
            <div
              key={c.title}
              className="card-glow group bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-primary/10 aspect-[4/3] flex items-center justify-center">
                <span className="text-4xl font-black text-primary/30">{c.title.charAt(0)}</span>
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{c.benefit}</p>
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
