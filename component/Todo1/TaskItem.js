import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsX, BsPencil } from "react-icons/bs";

const TaskItem = ({ list, deleteBy, handleSelect, cliked }) => {
  return (
    <div>
      <ListGroup>
        {list.map((data) => (
          <ListGroupItem
            onClick={() => handleSelect(data)}
            key={data.id}
            className={`d-flex justify-content-between align-items-center ${
              cliked(data) && "active"
            } `}
          >
            {data}{" "}
            
            <BsX
              role="button"
              onClick={() => deleteBy(data)}
              className="text-danger"
              fontSize={25}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskItem;
