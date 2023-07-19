import { useEffect, useState } from "react";
import Benefits from "./scenes/benefits";
import ContactUs from "./scenes/contactus";
import Footer from "./scenes/footer/index.";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import OurClasses from "./scenes/ourclasses";
import { SelectedPage } from "./shared/types";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTop, setIsTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", () => handleScroll());
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTop={isTop} selectedPage={selectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
