import { Code2, Globe, Server, Database, Brain, Wrench } from "lucide-react";
import { useState, useRef, type MouseEvent } from "react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["REST APIs", "Spring Boot"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL"],
  },
  {
    title: "AI & Algorithms",
    icon: Brain,
    items: ["Machine Learning", "K-Means", "Optimization", "OpenCV"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Power BI", "Tableau"],
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)` });
  };

  const handleLeave = () => setStyle({ transform: "perspective(600px) rotateY(0deg) rotateX(0deg)" });

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ${className || ""}`} style={style}>
      {children}
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <TiltCard key={cat.title}>
              <div className="glass rounded-xl p-6 glow-border hover:glow-box transition-all duration-300 h-full group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <cat.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold font-display text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
