import siteConfig from "./config/siteConfig";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
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
        subTagline={siteConfig.subTagline}
        heroImage={siteConfig.heroImage}
        whatsappNumber={siteConfig.whatsappNumber}
      />
      <About aboutText={siteConfig.aboutText} trustPoints={siteConfig.trustPoints} />
      <Services services={siteConfig.services} />
      <Gallery gallery={siteConfig.gallery} />
      <WhyChooseUs whyChooseUs={siteConfig.whyChooseUs} />
      <Reviews reviews={siteConfig.reviews} />
      <Hours hours={siteConfig.hours} whatsappNumber={siteConfig.whatsappNumber} />
      <Contact
        whatsappNumber={siteConfig.whatsappNumber}
        phoneNumber={siteConfig.phoneNumber}
        email={siteConfig.email}
        address={siteConfig.address}
        mapEmbedUrl={siteConfig.mapEmbedUrl}
        socials={siteConfig.socials}
      />
      <Footer
        businessName={siteConfig.businessName}
        whatsappNumber={siteConfig.whatsappNumber}
        email={siteConfig.email}
        hours={siteConfig.hours}
      />
    </>
  );
}

export default App;