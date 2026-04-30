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
          <Nav
            title={landingPageData.nav.title}
            navItems={landingPageData.nav.navItems}
          />
          <Header
            titleA={landingPageData.header.title}
            titleB={landingPageData.header.titleB}
            subtitle={landingPageData.header.subtitle}
            buttonText={landingPageData.header.buttonText}
          />
          <Features
            title={landingPageData.features.title}
            featItems={landingPageData.features.featItems}
          />
          <About
            title={landingPageData.about.title}
            text={landingPageData.about.text}
            whyUs={landingPageData.about.whyUs}
            whyItemsA={landingPageData.about.whyUsItemsA}
            whyItemsB={landingPageData.about.whyUsItemsB}
          />
          <Services
            title={landingPageData.services.title}
            txt={landingPageData.services.text}
            servicesItems={landingPageData.services.servicesItems}
          />
          <Gallery
            title={landingPageData.gallery.title}
            txt={landingPageData.gallery.text}
            imgS={landingPageData.gallery.images}
            imgL={landingPageData.gallery.imagesL}
          />
          <Testimonials
            title={landingPageData.testimonials.title}
            text={landingPageData.testimonials.text}
            users={landingPageData.testimonials.users}
          />
          <Team
            title={landingPageData.team.title}
            txt={landingPageData.team.text}
            teamMembers={landingPageData.team.teamMembers}
          />
          <Contact
            title={landingPageData.contact.title}
            txt={landingPageData.contact.text}
            frm={landingPageData.contact.form}
            contactInfo={landingPageData.contact.contactInfo}
            address={landingPageData.contact.address}
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
