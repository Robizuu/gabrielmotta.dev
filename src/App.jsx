import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Journey from "./pages/journey/Journey";
import Project from "./pages/project/Project";
import Skills from "./pages/skills/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
