import { useState } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OpeningSection from "./components/OpeningSection";
import PanelsSection from "./components/PanelsSection";
import HighlightSection from "./components/HighlightSection";
import LocationSection from "./components/LocationSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";

const App = () => {
  useScrollReveal();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onRegister={openModal} />
      <HeroSection onRegister={openModal} />
      <OpeningSection />
      <PanelsSection />
      <HighlightSection />
      <LocationSection />
      <CTASection onRegister={openModal} />
      <Footer />

      {modalOpen && <RegisterModal onClose={closeModal} />}
    </>
  );
};

export default App;
