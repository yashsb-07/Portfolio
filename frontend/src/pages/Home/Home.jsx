import Hero from "../../components/sections/Hero/Hero";
import CurrentFocus from "../../components/sections/CurrentFocus/CurrentFocus";
import About from "../../components/sections/About/About";
import Projects from "../../components/sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />

      <About />

      <CurrentFocus />

      <Projects />
    </>
  );
};

export default Home;