import Hero from "./components/hero/Hero";
import QuoteSection from "./components/QuoteSection";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import HowItWorks from "./components/process/HowItWorks";
import Trust from "./components/trust/Trust";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <QuoteSection />
      <About />
      <Projects />
      <HowItWorks />
      <Trust />
      <Services />
      <Contact />   {/* 👈 form here */}
      <Footer />
    </>
  );
}
