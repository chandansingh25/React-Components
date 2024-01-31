import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ButtonWrap = ({ btnclicked }) => {
  const [numbers, setNumbers] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",

    "%",
    "/",
    "*",

    "-",
    "+",
    ".",
    "C",
    "=",
  ]);

  return (
    <div
      className="d-flex gap-2 flex-wrap justify-content-center"
      style={{ maxWidth: "10rem" }}
    >
      {numbers.map((list, index) => (
        <Button
          key={index}
          onClick={() => btnclicked(list)}
          style={{ width: "42px", height: "42px" }}
          className="btn btn-light shadow border px-3 py-2 d-flex align-items-center justify-content-center"
        >
          {list}
        </Button>
      ))}
    </div>
  );
};

export default ButtonWrap;
