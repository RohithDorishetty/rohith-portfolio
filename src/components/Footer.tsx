import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rohith Dorishetty. Built with passion.
      </p>
      <div className="flex items-center gap-5">
        <a href="mailto:dorishettyrohith@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={16} /></a>
        <a href="https://www.linkedin.com/in/rohith-dorishetty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
        <a href="https://github.com/RohithDorishetty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 rounded-full glow-border flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all">
          <ArrowUp size={14} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
