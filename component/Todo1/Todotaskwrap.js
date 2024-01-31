import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Button } from "react-bootstrap";
import TaskAdd from "./TaskAdd";

const Todotaskwrap = () => {
  const [list, setList] = useState([]);
  const [seleted, setSeleted] = useState([]);

  const [addtask, setTask] = useState("");

  const deleteBy = (data) => {
    const deletetask = list.filter((e) => e !== data);
    setList(deletetask);
  };

  const handleSelect = (data) => {
    const clikedList = seleted.includes(data)
      ? seleted.filter((e) => e !== data)
      : [...seleted, data];
    setSeleted(clikedList);
  };

  const deleteAll = () => {
    const deleteseleted = list.filter((e) => !seleted.includes(e));
    setList(deleteseleted);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

    const handleAdd = () => {
      setList([addtask, ...list]);
    };

//   const handleAdd = () => {
//     if (addtask.trim() !== "") {
//       setList([{ id: Date.now(), text: addtask }, ...list]);
//       setTask("");
//     }
//   };

  const handleDown = (event) => {
    if (event.key == "Enter") {
      handleAdd();
    }
  };




  return (
    <div>
      {seleted}
      <TaskAdd
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleDown={handleDown}
      />
      <TaskItem
        cliked={(data) => seleted.includes(data)}
        list={list}
        deleteBy={deleteBy}
        handleSelect={handleSelect}
      />
      <div className="my-3">
        <Button onClick={deleteAll} className="btn btn-primary">
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default Todotaskwrap;
