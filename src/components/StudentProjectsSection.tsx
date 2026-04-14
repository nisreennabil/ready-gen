import project1 from "@/assets/student-project-1.jpeg";
import project2 from "@/assets/student-project-2.jpeg";

const StudentProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            Our Students' <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our students create and achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[project1, project2].map((img, i) => (
            <div
              key={i}
              className="card-glow group bg-card border border-border rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Student project ${i + 1}`}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjectsSection;
