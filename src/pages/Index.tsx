import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Background />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
