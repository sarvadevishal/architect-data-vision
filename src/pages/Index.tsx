import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
