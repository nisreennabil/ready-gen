import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {[review1, review2].map((img, i) => (
            <div
              key={i}
              className="card-glow bg-card border border-border rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Student review ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-glow bg-card border border-border rounded-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/9tI8HkyJ2rg"
              title="Ready Gen Student Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
