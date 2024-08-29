import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import StarrySky from '../components/StarrySky';


export default function Home() {
  return (
    <>   
      <StarrySky />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}