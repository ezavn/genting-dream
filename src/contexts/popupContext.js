import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showVideo, setShowVideo] = useState("");
  const [showTour1Day1, setShowTour1Day1] = useState(false);
  const [showTour1Day2, setShowTour1Day2] = useState(false);
  const [showTour1Day3, setShowTour1Day3] = useState(false);
  const [showTour1Day4, setShowTour1Day4] = useState(false);
  const [showTour2Day1, setShowTour2Day1] = useState(false);
  const [showTour2Day2, setShowTour2Day2] = useState(false);
  const [showTour2Day3, setShowTour2Day3] = useState(false);
  const [showTour2Day4, setShowTour2Day4] = useState(false);
  const value = {
    showTour1Day1,
    setShowTour1Day1,
    showTour1Day2,
    setShowTour1Day2,
    showTour1Day3,
    setShowTour1Day3,
    showTour1Day4, 
    setShowTour1Day4,
    showTour2Day1,
    setShowTour2Day1,
    showTour2Day2,
    setShowTour2Day2,
    showTour2Day3,
    setShowTour2Day3,
    showTour2Day4,
    setShowTour2Day4,
    showVideo,
    setShowVideo,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
