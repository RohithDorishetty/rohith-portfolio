import { useState, useEffect } from "react";
import { ArrowDown, FileText, Mail, FolderOpen } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Full Stack Developer",
  "Java Backend Engineer",
  "API Architect",
  "Machine Learning Engineer",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <ParticleBackground />
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase animate-fade-in">
          &lt;Welcome /&gt;
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-4 text-foreground leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient">Rohith Dorishetty</span>
        </h1>
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-primary">
            {text}
            <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
          </span>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I design scalable backend systems and intelligent web applications that solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
            <FolderOpen size={16} /> View Projects
          </a>
          <a href="Portfolio_resume.pdf
" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glow-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all duration-200">
            <FileText size={16} /> Download Resume
          </a>
          <a href="#blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glow-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all duration-200">
            Read Blog
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glow-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all duration-200">
            <Mail size={16} /> Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
