import { AboutSection } from "./About";
import { ContactSection } from "./Contacts";
import { FooterSection } from "./Footer";
import { ClientSection } from "./ForClient";
import { HeroSection } from "./HeroSection";
import { InfoSection } from "./Info";
import { NewsSection } from "./News";
import { PortfolioSection } from "./Portfolio";
import { ServicesSection } from "./Services";
import { SubscribeSection } from "./Subscribe";

function App() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <NewsSection />

      <ClientSection />

      <ContactSection />

      <SubscribeSection />

      <InfoSection />

      <FooterSection />

      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>

    </div>
  );
}

export default App;
