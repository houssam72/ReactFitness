import Benefits from "./scenes/benefits";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import OurClasses from "./scenes/ourclasses";
function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
    </div>
  );
}

export default App;
