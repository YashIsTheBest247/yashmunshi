import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import FloatingChat from "../components/FloatingChat";
import AISection from "../components/AISection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="relative bg-[#0b0f17] text-white overflow-x-hidden">
      <Navbar />

      {/* Global Page Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Footer />
      </div>

      <FloatingChat />
    </div>
  );
}