import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestFom from "./Form/TestFom";

const SwipeTest = () => {
  const [list, setList] = useState([
    {
      id: "1",
      name: "Item 1",
    },
    {
      id: "2",
      name: "Item 2",
    },
    {
      id: "3",
      name: "Item 3",
    },
    {
      id: "4",
      name: "Item 4",
    },
    {
      id: "5",
      name: "Item 5",
    },
  ]);

  const [newList, setNewList] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (data) => {
    // Toggle clicked state
    const isClicked = clickedItems.includes(data.id);
    const updatedClickedItems = isClicked
      ? clickedItems.filter((id) => id !== data.id)
      : [...clickedItems, data.id];

    setClickedItems(updatedClickedItems);

    // Move item to the new list if clicked, otherwise, remove from the new list
    if (isClicked) {
      const updatedList = newList.filter((item) => item.id !== data.id);
      setNewList(updatedList);
    } else {
      setNewList((prev) => [...prev, data]);
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            {list.map((data, index) => (
              <p
                key={index}
                onClick={() => handleClick(data)}
                className={`mb-3 border rounded p-3 bg-light ${
                  clickedItems.includes(data.id) ? "clicked" : ""
                }`}
                role="button"
              >
                {data.name}
              </p>
            ))}
          </Col>
          <Col>
            {newList.map((data, index) => (
              <p
                key={index}
                onClick={() => handleClick(data)}
                className="mb-3 border rounded p-3 bg-light clicked"
                role="button"
              >
                {data.name}
              </p>
            ))}
          </Col>
          <TestFom/>
        </Row>
      </Container>
    </>
  );
};

export default SwipeTest;
