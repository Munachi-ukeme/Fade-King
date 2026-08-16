import siteConfig from "./config/siteConfig";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header
        businessName={siteConfig.businessName}
        logoImage={siteConfig.logoImage}
        whatsappNumber={siteConfig.whatsappNumber}
      />
      <Hero
        businessName={siteConfig.businessName}
        tagline={siteConfig.tagline}
        heroImage={siteConfig.heroImage}
        whatsappNumber={siteConfig.whatsappNumber}
      />
      <About aboutText={siteConfig.aboutText} />
      <Services services={siteConfig.services} />
      <Hours hours={siteConfig.hours} />
      <Contact
        whatsappNumber={siteConfig.whatsappNumber}
        phoneNumber={siteConfig.phoneNumber}
        address={siteConfig.address}
        mapEmbedUrl={siteConfig.mapEmbedUrl}
        socials={siteConfig.socials}
      />
      <Footer businessName={siteConfig.businessName} />
    </>
  );
}

export default App;