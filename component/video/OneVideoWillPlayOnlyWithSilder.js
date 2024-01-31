import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import Modal from "react-bootstrap/Modal";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import OneVideoWillPlayOnly from "./OneVideoWillPlayOnly";

const OneVideoWillPlayOnlyWithSilder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    pauseAllVideos();
    setShow(true);
  };

  const handleSlideChange = () => {
    pauseAllVideos();
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const video_testimonial = [
    {
      name: "Akhil",
      video: "/video/review1.mp4",
    },
    {
      name: "Rahul",
      video: "/video/review2.mp4",
    },
    {
      name: "Prem Lata",
      video: "/video/review3.mp4",
    },
    {
      name: "Raman Gupta",
      video: "/video/review4.mp4",
    },
  ];

  const pauseAllVideos = () => {
    const allVideos = document.querySelectorAll("video");

    allVideos.forEach((v) => {
      v.pause();
    });
  };

  return (
    <div
      className={`border border-primary rounded p-3 mb-3 shadow-sm position-relative`}
      style={{ backgroundColor: "aliceblue" }}
    >
      <p className="fs-12 fw-bold mb-2">Moment of Truth</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={false}
        navigation={false}
        pagination={pagination}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        onSlideChange={(swiper) => handleSlideChange()}
      >
        {video_testimonial.map((list, index) => (
          <SwiperSlide key={index}>
            <OneVideoWillPlayOnly video={list.video} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p
        
      >
        <span onClick={handleShow} role="button">
          <BsFullscreen className="textprimary" />
        </span>
      </p>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-14 fw-bold">Moment of Truth</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 pb-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            navigation={false}
            pagination={pagination}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            onSlideChange={(swiper) => handleSlideChange()}
          >
            {video_testimonial.map((list, index) => (
              <SwiperSlide key={index}>
                <OneVideoWillPlayOnly video={list.video} />
              </SwiperSlide>
            ))}
          </Swiper>
          <p>
            <span onClick={handleClose} role="button">
              <BsFullscreenExit className="textprimary" />
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OneVideoWillPlayOnlyWithSilder;
