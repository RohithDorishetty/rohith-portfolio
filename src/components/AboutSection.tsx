import { useEffect, useRef, useState } from "react";

const counters = [
  { label: "Projects Built", value: 15 },
  { label: "Technologies Used", value: 20 },
  { label: "GitHub Repos", value: 25 },
  { label: "Hours of Coding", value: 2000 },
];

const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
};

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{count.toLocaleString()}{target >= 100 ? "+" : ""}</>;
};

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

        <div className="glass rounded-2xl p-6 sm:p-10 glow-box mb-12">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            I'm a Full Stack Developer with a passion for building robust backend systems using Java and Spring Boot. 
            My expertise spans REST API architecture, database modeling with MySQL, and scalable system design. 
            I integrate Machine Learning and optimization algorithms — from K-Means clustering to Computer Vision — into 
            production-ready web applications. With a B.Tech in Computer Science & Data Science Engineering, I bring 
            algorithmic thinking and clean architecture to every project.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {counters.map((c) => (
            <div key={c.label} className="glass rounded-xl p-5 text-center glow-border hover:glow-box transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary font-display mb-1">
                <AnimatedCounter target={c.value} inView={inView} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="glass rounded-xl p-6 text-center glow-border">
          <p className="text-base sm:text-lg font-medium text-foreground italic">
            "I build systems that scale, optimize, and deliver measurable impact."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
