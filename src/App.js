import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
