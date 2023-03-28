import React, { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { FaTimes } from "react-icons/fa";
import { usePopup } from "../../contexts/popupContext";

export default function VideoPopup() {
  const photoSphereRef = React.useRef();
  const { showVideo, setShowVideo } = usePopup();
  const handleClose = () => {
    setShowVideo("");
  };
  const viewerProps = {
    navbar: ["autorotate", "zoom", "caption"],
    defaultZoomLvl: 0,
    mousewheel: false,
    autorotateDelay: 0,
    autorotateSpeed: "0.8rpm",
    canvasBackground: "#000000",
    onReady: (instance) => {
      loop(instance);
    },
  };
  const loop = (instance) => {
    photoSphereRef.current.rotate({
      pitch: "0deg",
      yaw: 0,
    });

    photoSphereRef.current.animate({
      yaw: Math.PI,
      pitch: "0deg",
      zoom: 50,
      speed: "0.8rpm",
    });
    // setTimeout(function () {
    //   loop(instance);
    // }, 10000);
  };
  return (
    <>
      {showVideo ? (
        <div className="overlay-video">
          <div className="absolute top-[20px] md:top-[250px] right-[25px] lg:top-[30px] lg:right-[100px] cursor-pointer">
            <FaTimes
              onClick={() => handleClose()}
              size={30}
              style={{ color: "#fff" }}
            ></FaTimes>
          </div>
          <div className="w-[80vw] h-[80vh] md:h-[40vh] lg:h-[80vh]">
            <ReactPhotoSphereViewer
              ref={photoSphereRef}
              src={showVideo}
              height={"100%"}
              width={"100%"}
              autorotateDelay={0}
              {...viewerProps}
            ></ReactPhotoSphereViewer>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
