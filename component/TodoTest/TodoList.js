import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsX } from "react-icons/bs";

const TodoList = ({ data, handleDeleteBy, handleMultiple,cliked }) => {
  return (
    <div>
      <ListGroup>
        {data.map((data, index) => (
          <ListGroup.Item
            role="button"
            key={index}
            className={`d-flex align-items-center justify-content-between ${cliked(data) ? "active" : null}`}
            onClick={() => handleMultiple(data)}
          >
            {data}{" "}
            <BsX
              fontSize={30}
              role="button"
              className="text-danger"
              onClick={() => handleDeleteBy(data)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
