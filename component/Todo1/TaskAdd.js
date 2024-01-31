import React from "react";
import { Button } from "react-bootstrap";

const TaskAdd = ({handleChange,handleAdd,handleDown}) => {
  return (
    <div className="mb-3 d-flex gap-3">
      <input className="w-100" type="text" onChange={handleChange} onKeyDown={handleDown} /> <Button onClick={handleAdd} className="btn btn-primary">Add</Button>
    </div>
  );
};

export default TaskAdd;
