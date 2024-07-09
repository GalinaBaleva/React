import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutUs from './components/about-us/AboutUs';
import Facts from './components/facts/Facts';
import Services from './components/our-services/OurServices';
import Newsletter from './components/newslette/Newsletter';
import Projects from './components/projects/Projects';
import Team from './components/team/Team';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-xxl bg-white p-0">
      {/* Spinner Start */}
      {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
      {/* Spinner End */}
      <Header />
      <Services />
      <AboutUs />
      <Facts />
      <Projects />
      <Newsletter />
      <Team />
      <Footer />
      <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
        // <i className="bi bi-arrow-up" />
      </a>
    </div>
  )
}

export default App
