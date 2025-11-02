import { Database, Zap, Share2, BarChart3 } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Zero ETL Integration",
      description:
        "Architected seamless data movement between Aurora MySQL and Redshift, eliminating traditional ETL complexity while maintaining data integrity and real-time synchronization.",
      impact: "Reduced data latency by 80% and cut infrastructure costs by 40%",
      icon: Database,
    },
    {
      title: "Materialized View Optimization",
      description:
        "Re-engineered materialized view refresh strategies using incremental processing and intelligent scheduling, dramatically improving query performance for business-critical reports.",
      impact: "Achieved 60%+ faster refresh times and improved dashboard response by 3x",
      icon: Zap,
    },
    {
      title: "Datashare Architecture",
      description:
        "Designed and implemented cross-cluster datashare systems enabling secure, governed data sharing across producer-consumer environments without data duplication.",
      impact: "Enabled real-time collaboration across 5+ teams while reducing storage by 50%",
      icon: Share2,
    },
    {
      title: "Real-Time Analytics Platform",
      description:
        "Built end-to-end analytics infrastructure integrating Power BI with Redshift, featuring automated data pipelines, performance-tuned queries, and cost optimization strategies.",
      impact: "Delivered sub-second query performance and $100K+ annual cost savings",
      icon: BarChart3,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Featured Projects & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming data challenges into scalable solutions with measurable business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
