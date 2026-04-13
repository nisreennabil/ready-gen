import { Button } from "@/components/ui/button";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(228_100%_52%_/_0.12),transparent_70%)]" />

      <div className="container relative z-10 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          Are You Ready to{" "}
          <span className="text-gradient">Become Him?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Stop watching from the sidelines. Join the generation that leads, speaks, and wins.
        </p>
        <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="px-12 py-7 text-lg rounded-xl animate-pulse-glow mt-4">
            Join Ready Gen Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
