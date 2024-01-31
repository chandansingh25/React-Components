import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsXSquare } from "react-icons/bs";

const TodoItem = ({ todoList,handleRemove,handleSelect }) => {
  return (
    <div>
      <ListGroup>
        {todoList.map((data, index) => (
          <ListGroup.Item
            className="d-flex justify-content-between"
            key={index}
            onClick={() => handleSelect(data)}
            
          >
            {data}{" "}
            <span onClick={() => handleRemove(data)}>
              <BsXSquare />
            </span>{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoItem;
