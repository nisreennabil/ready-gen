const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from real students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="card-glow bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Review screenshot {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
