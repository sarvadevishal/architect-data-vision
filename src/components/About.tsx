import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over <span className="font-semibold text-primary">11 years of experience</span> in
              enterprise data engineering, I specialize in designing and implementing scalable data
              infrastructures that transform how organizations leverage their data assets.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise centers on <span className="font-semibold text-secondary">AWS Redshift</span>,
              where I've pioneered Zero ETL integrations, optimized materialized views to achieve{" "}
              <span className="font-semibold text-accent">60%+ performance improvements</span>, and
              architected datashare systems that enable seamless cross-team collaboration across
              producer-consumer clusters.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Beyond building robust data pipelines, I'm passionate about integrating AI into data
              workflows to unlock new levels of intelligence and automation. I believe in mentoring
              teams, fostering innovation, and ensuring that every architectural decision drives
              measurable business impact.
            </p>

            {/* Quote */}
            <div className="relative bg-primary/5 border-l-4 border-secondary p-8 rounded-r-lg my-10">
              <Quote className="absolute top-4 left-4 text-secondary opacity-20" size={48} />
              <p className="text-2xl font-heading italic text-primary pl-12">
                "Great architecture turns data into decisions."
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not architecting data systems, you'll find me sharing insights through my
              YouTube channel, writing about emerging trends in data engineering, or exploring how
              the latest AI breakthroughs can be applied to solve real-world data challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
