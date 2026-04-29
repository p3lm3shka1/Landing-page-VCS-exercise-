import "./App.scss";

import Nav from "./components/Navigation/Nav";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
