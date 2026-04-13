import { Mic, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Mic,
    title: "Public Speaking",
    desc: "Speak with confidence. Own any room.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Build real connections and leadership.",
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Think sharp. Act fast. Win.",
    color: "primary",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            Skills That <span className="text-gradient">Actually Matter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We don't teach useless theory. We build real-world confidence through 3 core pillars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="card-glow group relative bg-card border border-border rounded-2xl p-8 text-center space-y-4 overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${v.color === "secondary" ? "bg-secondary/15 text-secondary" : "bg-primary/15 text-primary"}`}>
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
