import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Camps from "./components/Camps";
import Coach from "./components/Coach";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Programs />
      <Camps />
      <Coach />
      <Contact />
    </div>
  );
}

export default App;
