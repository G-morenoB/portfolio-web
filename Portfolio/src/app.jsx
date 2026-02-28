import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
  <main className="app-container">
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Footer />
  </main>
);
}

export default App;