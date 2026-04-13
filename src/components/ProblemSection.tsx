import { X, ArrowRight } from "lucide-react";

const problems = [
  "No real skills — just theory and textbooks",
  "No confidence — still afraid to speak up",
  "No results — wasted time and money",
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">
              Most Courses{" "}
              <span className="text-destructive">Waste Your Time.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              You've seen it. Boring lectures. No practice. Zero transformation.
            </p>
          </div>

          <div className="space-y-4">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-center gap-4 bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-left"
              >
                <X className="w-5 h-5 text-destructive shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <ArrowRight className="w-6 h-6 text-secondary animate-float" />
            <p className="text-xl font-bold">
              That's why we built{" "}
              <span className="text-gradient font-black">Ready Gen</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
