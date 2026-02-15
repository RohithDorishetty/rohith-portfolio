import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Peer Developer",
    text: "Rohith's backend architecture skills are exceptional. He approaches every problem with a systems mindset and delivers clean, scalable solutions.",
  },
  {
    name: "Dr. Priya Reddy",
    role: "Faculty Mentor",
    text: "One of the most dedicated students I've mentored. His ability to combine ML with practical engineering makes him stand out.",
  },
  {
    name: "Karthik Rao",
    role: "Project Collaborator",
    text: "Working with Rohith on the tour planning project was impressive. His algorithmic thinking and code quality are top-notch.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
        What People <span className="text-gradient">Say</span>
      </h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={t.name} className="glass rounded-xl p-6 glow-border hover:glow-box transition-all duration-300 animate-float"
            style={{ animationDelay: `${i * 0.5}s` }}>
            <Quote size={20} className="text-primary/30 mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-primary font-mono">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
