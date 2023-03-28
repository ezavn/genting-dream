import About from "./components/About";
import PopupTour1Day1 from "./components/common/PopupTour1Day1";
import PopupTour1Day2 from "./components/common/PopupTour1Day2";
import PopupTour1Day3 from "./components/common/PopupTour1Day3";
import PopupTour2Day1 from "./components/common/PopupTour2Day1";
import PopupTour2Day2 from "./components/common/PopupTour2Day2";
import PopupTour2Day3 from "./components/common/PopupTour2Day3";
import PopupTour2Day4 from "./components/common/PopupTour2Day4";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Register from "./components/Register";
import Tour1 from "./components/Tour1";
import Tour2 from "./components/Tour2";
import { PopupProvider } from "./contexts/popupContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPopup from "./components/common/VideoPopup";

function App() {
  return (
    <>
      <PopupProvider>
        <Header />
        <Hero />
        <Intro />
        <About />
        <Tour1 />
        <Tour2 />
        <Register />
        <VideoPopup></VideoPopup>
        <Footer />
        <PopupTour1Day1 />
        <PopupTour1Day2 />
        <PopupTour1Day3 />
        <PopupTour2Day1 />
        <PopupTour2Day2 />
        <PopupTour2Day3 />
        <PopupTour2Day4 />
      </PopupProvider>
    </>
  );
}

export default App;
