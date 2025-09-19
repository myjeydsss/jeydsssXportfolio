import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";

export default function App() {
  return (
    <div className="app scroll-shell" id="top">
      <Navbar />
      <main className="snap-container">
        <section id="home" className="snap-section">
          <Home />
        </section>
        <section id="about" className="snap-section">
          <About />
        </section>
        <section id="projects" className="snap-section">
          <Projects />
        </section>
        <section id="certificates" className="snap-section">
          <Certificates />
        </section>
        <section id="contact" className="snap-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
