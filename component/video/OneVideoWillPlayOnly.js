import React, { useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";

const OneVideoWillPlayOnly = ({ video, name }) => {

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      const handlePlay = () => {
        pauseAllOtherVideos();
      };

      if (videoElement) {
        videoElement.addEventListener("play", handlePlay);

        return () => {
          videoElement.removeEventListener("play", handlePlay);
        };
      }
    }
  }, [videoRef]);

  const pauseAllOtherVideos = () => {
    const allVideos = document.querySelectorAll("video");

    allVideos.forEach((v) => {
      if (v !== videoRef.current) {
        v.pause();
      }
    });
  };

  return (
    <Col>
      <video
        controls
        src={video}
        ref={videoRef}
        autoPlay={false}
        style={{ width: "100%", height: "200px" }}
      />
    </Col>
  );
};

export default OneVideoWillPlayOnly;
