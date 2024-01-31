import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import OneVideoWillPlayOnly from "./OneVideoWillPlayOnly";
import { Row } from "react-bootstrap";

const StudentVideo = () => {

  const cv_testimonial = [
    {
      name: "Akhil",
      video: "/video/review1.mp4",
    },
    {
      name: "Rahul",
      video: "/video/review1.mp4",
    },
    {
      name: "Prem Lata",
      video: "/video/review1.mp4",
    },
    {
      name: "Raman Gupta",
      video: "/video/review1.mp4",
    },
  ];
  return (
    <>
      <Row>
        {cv_testimonial.map((list, index) => (
          <Col lg={3} key={index} className="mb-4">
            <div
              className="rounded pt-1 px-3 pb-1"
              style={{ border: "1px solid #000" }}
            >
              {" "}
              <OneVideoWillPlayOnly video={list.video} name={list.name} />
              <p className="textprimary fs-14 mt-2">- {list.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StudentVideo;
