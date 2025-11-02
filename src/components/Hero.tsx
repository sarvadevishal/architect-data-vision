import { Button } from "@/components/ui/button";
import { Linkedin, Github, Youtube, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import vishalPortrait from "@/assets/vishal-portrait.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/vishal-sarvade", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Mail, href: "mailto:vishal@example.com", label: "Email" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Architecting Data Systems That Power{" "}
              <span className="text-secondary">Intelligent Business Decisions</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 font-light">
              I'm <span className="font-semibold text-accent">Vishal Kumar Sarvade</span> —
              Technical Architect specializing in AWS Redshift, scalable data infrastructures,
              and AI-driven analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow text-lg px-8"
              >
                Let's Connect
              </Button>
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-secondary hover:scale-110 transition-smooth shadow-elegant"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              <img
                src={vishalPortrait}
                alt="Vishal Kumar Sarvade - Technical Architect"
                className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover border-4 border-secondary shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
