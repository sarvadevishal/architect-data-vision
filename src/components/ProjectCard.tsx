import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
}

const ProjectCard = ({ title, description, impact, icon: Icon }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth border-border hover:border-secondary/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
            <Icon className="text-secondary" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-smooth">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-accent">
            📊 {impact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
