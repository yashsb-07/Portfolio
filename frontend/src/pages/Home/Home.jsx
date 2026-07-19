import Hero from "../../components/sections/Hero/Hero";
import CurrentFocus from "../../components/sections/CurrentFocus/CurrentFocus";
import About from "../../components/sections/About/About";
import Projects from "../../components/sections/Projects/Projects";
import Skills from "../../components/sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />

      <About />

      <CurrentFocus />

      <Projects />
      
      <Skills />
    </>
  );
};

export default Home;