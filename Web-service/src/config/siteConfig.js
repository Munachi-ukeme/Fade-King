const siteConfig = {
     // Core identity
  businessName: "Moon Bakery",
  tagline: "Freshly baked, every single morning.",
  aboutText: "We've been serving Kigali's best bread and pastries since 2019. Every item is baked fresh daily using local ingredients.",

  // Images
  logoImage: "/logo.jpg",
  heroImage: "/hero.jpg",

    // What they offer
 services: [
  {
    name: "Custom Cakes",
    description: "Birthdays, weddings, any occasion.",
    image: "/services/cakes.jpg"
  },
  {
    name: "Daily Bread",
    description: "Fresh loaves baked every morning.",
    image: "/services/bread.jpg"
  },
  {
    name: "Pastries",
    description: "Croissants, donuts, and more.",
    image: "/services/pastries.jpg"
  }
],


  // Hours
  hours: {
    Monday: "7:00 AM - 7:00 PM",
    Tuesday: "7:00 AM - 7:00 PM",
    Wednesday: "7:00 AM - 7:00 PM",
    Thursday: "7:00 AM - 7:00 PM",
    Friday: "7:00 AM - 7:00 PM",
    Saturday: "8:00 AM - 5:00 PM",
    Sunday: "Closed"
  },
  
  whatsappNumber: "250787771656",
  phoneNumber: "250787771656",
  socials: {
  instagram: "https://instagram.com/kigalifreshbakery",
  facebook: "https://facebook.com/kigalifreshbakery",
  tiktok: "" // leave empty string if they don't have one
},
address: "KG 195 St, Kigali, Rwanda",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE",
};

export default siteConfig;