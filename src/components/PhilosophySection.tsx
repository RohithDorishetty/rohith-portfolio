const PhilosophySection = () => (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8 rounded-full animate-glow-pulse" />
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground leading-snug mb-8">
          "Scalable systems begin with{" "}
          <span className="text-gradient">clean architecture</span>{" "}
          and end with{" "}
          <span className="text-gradient">optimized execution.</span>"
        </blockquote>
        <div className="w-16 h-0.5 bg-primary mx-auto rounded-full animate-glow-pulse" />
      </div>
    </section>
  );
  
  export default PhilosophySection;
  