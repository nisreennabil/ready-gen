import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-xl space-y-8 flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary animate-fade-up">
              🚀 The #1 Youth Confidence Program
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Ready for{" "}
              <span className="text-gradient">Tomorrow.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real-world skills that turn you from average to elite. Public speaking, teamwork, and problem solving — mastered.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg rounded-xl">
                  Start Your Journey
                </Button>
              </a>
              <a href="#courses">
                <Button variant="heroOutline" size="lg" className="px-8 py-6 text-lg rounded-xl">
                  Explore Courses
                </Button>
              </a>
            </div>

            <div
              className="flex gap-8 pt-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { num: "250+", label: "Students Trained" },
                { num: "95%", label: "Confidence Growth" },
                { num: "3", label: "Core Programs" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-secondary">{s.num}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src={heroBanner}
                alt="Ready for Tomorrow - Ready Gen"
                className="relative rounded-2xl shadow-2xl w-full object-cover border border-border/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
