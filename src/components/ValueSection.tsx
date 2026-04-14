import { Mic, Users, Lightbulb } from "lucide-react";
import brandChoose from "@/assets/brand-choose.jpg";
import brandProject from "@/assets/brand-project.jpg";
import brandSkills from "@/assets/brand-skills.jpg";

const values = [
  {
    icon: Mic,
    title: "Real Skills, Not Theory",
    desc: "We teach practical skills you can use today — not just textbooks.",
    image: brandSkills,
    color: "primary",
  },
  {
    icon: Users,
    title: "Hands-On Projects",
    desc: "Learn by doing. Your first project starts day one.",
    image: brandProject,
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Choose the Right Path",
    desc: "We help you pick the right course for your goals.",
    image: brandChoose,
    color: "primary",
  },
];

const ValueSection = () => {
  return (
    <section id="value" className="py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We don't teach useless theory. We build real-world confidence through action.
          </p>
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
