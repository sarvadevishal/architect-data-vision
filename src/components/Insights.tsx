import { Card, CardContent } from "@/components/ui/card";
import { Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Insights = () => {
  const videos = [
    {
      title: "Zero ETL Deep Dive: AWS Redshift Integration",
      description: "Exploring the architecture and implementation of Zero ETL between Aurora and Redshift",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    },
    {
      title: "Redshift Performance Tuning Masterclass",
      description: "Advanced techniques for optimizing query performance and reducing costs",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    },
  ];

  const blogPosts = [
    {
      title: "Zero ETL: Redefining Data Movement in AWS",
      summary: "How Zero ETL is transforming the way we think about data integration and the architectural patterns that make it work.",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
    },
    {
      title: "Why Redshift RA3 Clusters Changed How I Think About Scale",
      summary: "A deep dive into RA3 architecture, managed storage, and how it enables true separation of compute and storage.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    },
    {
      title: "Integrating AI into ETL Workflows — A Practical Guide",
      summary: "Real-world strategies for incorporating AI capabilities into data pipelines for intelligent automation and insights.",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="insights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* YouTube Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Youtube className="text-secondary" size={40} />
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                Talks & Insights
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch my deep-dives into data architecture, AI integrations, and Redshift performance tuning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <Card
                key={video.title}
                className="group hover:shadow-elegant transition-smooth overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                      <Youtube className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-smooth">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-accent" size={40} />
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                Ideas & Insights
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring trends, best practices, and innovations in data engineering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={post.title}
                className="group hover:shadow-elegant transition-smooth overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
