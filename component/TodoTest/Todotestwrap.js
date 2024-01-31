import React, { useState } from "react";
import TodoList from "./TodoList";

const Todotestwrap = () => {
  const [list, setList] = useState([
    "list 1",
    "list 2",
    "list 3",
    "list 4",
    "list 5",
  ]);

  const [selectedList, setselectedList] = useState([]);
  const [shouldDelete , setshouldDelete] = useState(false);

  const handleDeleteBy = (data) => {
    const deleteBy = list.filter((e) => e !== data);
    setList(deleteBy);
  };

  const handleMultiple = (data) => {
    const selectedItem = selectedList.includes(data)
      ? selectedList.filter((e) => e !== data)
      : [...selectedList, data];
    setselectedList(selectedItem);
  };

  const deleteAll = () => {

   const deleteAll = list.filter((e) => !selectedList.includes(e));
        setList(deleteAll);
  };

  return (
    <div>
      
      <div>
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
      {shouldDelete ? <p>Select Atleat One Item</p> :<p>Are You sure?</p>}
      <TodoList
        data={list}
        cliked={(data) => selectedList.includes(data)}
        handleDeleteBy={handleDeleteBy}
        handleMultiple={handleMultiple}
      />
    </div>
  );
};

export default Todotestwrap;
