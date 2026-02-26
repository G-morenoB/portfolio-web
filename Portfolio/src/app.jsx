import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
  <main className="app-container">
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Contact />
  </main>
);
}

export default App;