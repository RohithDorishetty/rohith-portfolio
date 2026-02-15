import { useState } from "react";
import { Send, Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

        <div className="glass rounded-2xl p-6 sm:p-10 glow-box">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Your Name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none" />
            </div>
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
              <Send size={16} /> Send Message
            </button>
          </form>

          <div className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:dorishettyrohith@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+919603675960" className="text-muted-foreground hover:text-primary transition-colors" title="Phone">
                <Phone size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rohith-dorishetty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/RohithDorishetty" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
                <Github size={20} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground">
              <span>dorishettyrohith@gmail.com</span>
              <span className="hidden sm:inline">•</span>
              <span>+91 9603675960</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
