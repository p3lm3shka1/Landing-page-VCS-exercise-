import "./App.scss";

import Nav from "./pages/Navigation/Nav";
import Header from "./pages/Header/Header";
import Features from "./pages/Features/Features";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Testimonials from "./pages/Testimonials/Testimonials";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

import { useState, useEffect } from "react";

import jsonData from "./data/data.json";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(jsonData);
  }, []);

  return (
    <>
      {landingPageData && (
        <>
          <Nav t={landingPageData.nav.title} n={landingPageData.nav.navItems} />
          <Header
            tA={landingPageData.header.title}
            tB={landingPageData.header.titleB}
            s={landingPageData.header.subtitle}
            btn={landingPageData.header.buttonText}
          />
          <Features
            t={landingPageData.features.title}
            f={landingPageData.features.featItems}
          />
          <About
            t={landingPageData.about.title}
            text={landingPageData.about.text}
            why={landingPageData.about.whyUs}
            whyItemsA={landingPageData.about.whyUsItemsA}
            whyItemsB={landingPageData.about.whyUsItemsB}
          />
          <Services
            t={landingPageData.services.title}
            txt={landingPageData.services.text}
            sI={landingPageData.services.servicesItems}
          />
          <Gallery
            title={landingPageData.gallery.title}
            txt={landingPageData.gallery.text}
            imgS={landingPageData.gallery.images}
            imgL={landingPageData.gallery.imagesL}
          />
          <Testimonials
            t={landingPageData.testimonials.title}
            txt={landingPageData.testimonials.text}
            tItems={landingPageData.testimonials.tItems}
          />
          <Team
            t={landingPageData.team.title}
            txt={landingPageData.team.text}
            tM={landingPageData.team.teamMembers}
          />
          <Contact
            t={landingPageData.contact.title}
            txt={landingPageData.contact.text}
            frm={landingPageData.contact.form}
            cInfo={landingPageData.contact.contactInfo}
            ad={landingPageData.contact.address}
            phone={landingPageData.contact.phone}
            email={landingPageData.contact.email}
            social={landingPageData.contact.social}
          />
          <Footer
            txt={landingPageData.footer.text}
            link={landingPageData.footer.link}
          />
        </>
      )}
    </>
  );
}
export default App;
