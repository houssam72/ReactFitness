import Benefits from "./scenes/benefits";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";

function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
