import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior Program Manager, Enterprise Analytics",
      quote: "Vishal's ability to translate complex technical requirements into elegant architectural solutions is exceptional. His work on our Redshift infrastructure has been transformative.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Data Engineer",
      quote: "As a mentee, I've learned more from Vishal in six months than I did in years. His approach to problem-solving and his patience in explaining complex concepts are invaluable.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CTO, FinTech Solutions",
      quote: "Vishal doesn't just build data systems; he builds data strategies. His forward-thinking approach to integrating AI into our pipelines has given us a significant competitive advantage.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Testimonials & Mentorship
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What colleagues and mentees say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-elegant transition-smooth border-border hover:border-accent/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="text-secondary opacity-20 mb-4" size={40} />
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
