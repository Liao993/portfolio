import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-bold">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
