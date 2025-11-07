import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Timer from "./components/ui/timer/Timer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Culture from "./pages/culture/Culture";
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
      <Culture />
      <Contact />
      <Footer />
      <Timer />
    </>
  );
};

export default App;
