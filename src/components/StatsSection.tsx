import { useRef, useState, useEffect } from "react";
import { GitBranch, FolderOpen, Layers, Target } from "lucide-react";

const stats = [
  { icon: GitBranch, label: "GitHub Contributions", value: 500 },
  { icon: FolderOpen, label: "Projects Built", value: 15 },
  { icon: Layers, label: "Tech Stack", value: 20 },
  { icon: Target, label: "Problems Solved", value: 200 },
];

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!inView) return;
      let start = 0;
      const dur = 1500;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        setCount(Math.floor(p * target));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [inView, target]);
    return <>{count.toLocaleString()}+</>;
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
          Coding <span className="text-gradient">Stats</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

        <div className="glass rounded-2xl p-6 sm:p-10 glow-box">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-1">
                  <Counter target={s.value} />
                </div>
                <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
