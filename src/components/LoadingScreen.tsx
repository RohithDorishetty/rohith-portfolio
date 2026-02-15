import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient font-display tracking-wider">RD</h1>
      </div>
      <div className="w-48 h-0.5 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-4 text-xs text-muted-foreground font-mono tracking-widest uppercase">
        Initializing...
      </p>
    </div>
  );
};

export default LoadingScreen;
