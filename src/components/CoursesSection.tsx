import { Button } from "@/components/ui/button";
import { Mic, Users, Lightbulb, ArrowUpRight } from "lucide-react";

const courses = [
  {
    icon: Mic,
    title: "Public Speaking Mastery",
    benefit: "Command attention. Speak with power. Become unforgettable.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Public%20Speaking%20course",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    benefit: "Lead teams. Build trust. Create real impact together.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Teamwork%20course",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving Pro",
    benefit: "Think critically. Solve fast. Outperform everyone.",
    wa: "https://wa.me/201007705216?text=Hey%20I%20am%20interested%20in%20the%20Problem%20Solving%20course",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((c, i) => (
            <div
              key={c.title}
              className="card-glow group bg-card border border-border rounded-2xl p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 text-primary">
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.benefit}</p>
              </div>
              <a href={c.wa} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full rounded-xl gap-2">
                  WhatsApp Us <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
