import Benefits from "./scenes/benefits";
import ContactUs from "./scenes/contactus";
import Footer from "./scenes/footer/index.";
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
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
