import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
