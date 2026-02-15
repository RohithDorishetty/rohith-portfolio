import { useRef, useState, type MouseEvent } from "react";
import { ExternalLink, Github, Cpu, Map, Ticket } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    title: "Beauty Intuition",
    tagline: "AI-Powered Beauty Recommendation Engine",
    description: "An intelligent recommendation system that uses Machine Learning and Computer Vision to analyze facial features and recommend personalized beauty products.",
    architecture: "Multi-layer ML pipeline with feature extraction using OpenCV, model training with scikit-learn, and a REST API serving predictions to a responsive frontend.",
    tech: ["Python", "OpenCV", "ML", "REST API", "scikit-learn"],
    challenges: ["Real-time facial feature extraction", "Model accuracy optimization", "Scalable prediction serving"],
  },
  {
    icon: Map,
    title: "Tour Guide & Planner",
    tagline: "Route Optimization with K-Means + TSP",
    description: "An intelligent tour planning application that clusters destinations using K-Means and optimizes routes within clusters using the Travelling Salesman Problem algorithm.",
    architecture: "Algorithmic core with K-Means for geographical clustering, TSP solver for intra-cluster optimization, and a visual map interface for route display.",
    tech: ["Java", "K-Means", "TSP", "Optimization", "Algorithm Design"],
    challenges: ["NP-hard problem approximation", "Efficient clustering at scale", "Real-time route recalculation"],
  },
  {
    icon: Ticket,
    title: "Movie Ticket Booking",
    tagline: "Full-Stack Java + MySQL Booking System",
    description: "A complete movie ticket booking platform with seat selection, payment processing, and booking management built on a robust Java backend with MySQL.",
    architecture: "MVC architecture with Java servlets, JDBC for database operations, transaction management for concurrent bookings, and a responsive web frontend.",
    tech: ["Java", "MySQL", "JDBC", "HTML/CSS/JS", "MVC"],
    challenges: ["Concurrent seat booking prevention", "Transaction integrity", "Database optimization"],
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)` });
  };
  const handleLeave = () => setStyle({ transform: "perspective(800px) rotateY(0) rotateX(0)" });

  const Icon = project.icon;

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      className="transition-transform duration-200" style={style}>
      <div className="glass rounded-2xl p-6 sm:p-8 glow-border hover:glow-box transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-foreground">{project.title}</h3>
            <p className="text-sm text-primary font-mono">{project.tagline}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-2">Architecture</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.architecture}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-2">Key Challenges</h4>
          <ul className="space-y-1">
            {project.challenges.map((c) => (
              <li key={c} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Github size={14} /> Code
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
