import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Youtube, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vishal-sarvade",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:bg-[#FF0000]",
    },
    {
      icon: Mail,
      href: "mailto:vishal@example.com",
      label: "Email",
      color: "hover:bg-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Let's Build Something Intelligent Together
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, need architectural guidance,
            or just want to discuss data engineering, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold mb-6">Connect With Me</h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or sharing insights
              about data architecture and engineering. Let's connect across platforms:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 ${social.color} hover:text-white transition-smooth group`}
                >
                  <social.icon size={24} />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h4 className="text-xl font-heading font-bold mb-3">Live Chat</h4>
              <p className="text-white/80 mb-4">
                Need quick answers? Start a conversation using the chat widget below or on any page.
              </p>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Open Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
