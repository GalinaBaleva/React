import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Newslatter from "./components/Newslatter";


function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <Features />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Newslatter />
      <Footer />
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </>
  )
}

export default App
