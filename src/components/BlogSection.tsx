import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Building Scalable REST APIs in Java",
    excerpt: "Best practices for designing RESTful services that handle thousands of concurrent requests with clean architecture patterns.",
    date: "Jan 2025",
    tag: "Backend",
  },
  {
    title: "Optimizing Route Planning with Algorithms",
    excerpt: "How K-Means clustering and TSP approximation algorithms can solve real-world logistics challenges efficiently.",
    date: "Dec 2024",
    tag: "Algorithms",
  },
  {
    title: "Integrating ML into Web Applications",
    excerpt: "A practical guide to serving machine learning models through REST APIs for production web applications.",
    date: "Nov 2024",
    tag: "ML",
  },
  {
    title: "Backend Architecture for Startups",
    excerpt: "Designing systems that scale from zero to millions — choosing the right patterns for early-stage products.",
    date: "Oct 2024",
    tag: "Architecture",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
        Tech <span className="text-gradient">Blog</span>
      </h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <article key={post.title} className="glass rounded-xl p-6 glow-border hover:glow-box transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.tag}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar size={12} /> {post.date}
              </span>
            </div>
            <h3 className="text-lg font-semibold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
              Read more <ArrowRight size={14} />
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
