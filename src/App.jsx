import About from "./components/About";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-bold">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
