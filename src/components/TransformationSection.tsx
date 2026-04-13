const TransformationSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            This Isn't Just Learning.{" "}
            <span className="text-gradient">This is Transformation.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/15 text-destructive text-sm font-bold">
                BEFORE
              </span>
              <ul className="space-y-4">
                {[
                  "Afraid to speak in public",
                  "Shy and unsure of yourself",
                  "Confused about your path",
                  "Blending in with the crowd",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-destructive mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="card-glow bg-card border border-secondary/30 rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-bold">
                AFTER READY GEN
              </span>
              <ul className="space-y-4">
                {[
                  "Commanding any room with confidence",
                  "Leading teams and projects",
                  "Clear vision and sharp thinking",
                  "Standing out as elite",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground font-medium">
                    <span className="text-secondary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
