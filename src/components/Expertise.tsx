import { Cloud, Code, Workflow, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Core Platforms",
      icon: Cloud,
      skills: ["AWS Redshift", "Amazon S3", "AWS Glue", "Amazon Athena", "Aurora"],
    },
    {
      title: "Languages & Tools",
      icon: Code,
      skills: ["SQL", "Python", "Informatica Cloud", "Power BI", "Tableau"],
    },
    {
      title: "Architecture Focus",
      icon: Workflow,
      skills: ["Data Lakes", "ELT/ETL", "Automation", "Performance Tuning", "AI Integration"],
    },
    {
      title: "Leadership",
      icon: TrendingUp,
      skills: ["Team Mentorship", "System Design", "Strategic Planning", "Cross-functional Collaboration"],
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Technical Expertise
          </h2>
          <p className="text-2xl font-heading italic text-secondary max-w-3xl mx-auto">
            Bridging engineering excellence with strategic insight
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <Card
              key={area.title}
              className="group hover:shadow-elegant transition-smooth border-border hover:border-secondary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <area.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-smooth">
                  {area.title}
                </h3>
                
                <ul className="space-y-2">
                  {area.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
