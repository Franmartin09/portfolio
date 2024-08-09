import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>   
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
