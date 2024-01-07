import { useState } from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Theme from "./components/theme/Theme";

function App() {
  const [theme, setTheme] = useState("theme5");
  return (
    <>
      <div className={`App ${theme}`}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Theme setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
