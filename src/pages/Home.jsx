import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import ProductCategories from "../components/ProductCategories";
import Contact from "../components/Contact";
import QuoteSection from "../components/QuoteSection";
import Brands from "../components/BrandsTemp";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ProductCategories />
      <Categories />
      <WhyChooseUs />
      <Brands />
      <Industries />
      <Projects />
      <CTA />
      <WhatsAppButton />
      <QuoteSection />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
