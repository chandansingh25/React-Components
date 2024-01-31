import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoWrap = () => {
  const [todoList, setTodoList] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
  ]);

  const handleRemove = (data) => {
    console.log(data);
    const removeItem = todoList.filter((e) => e !== data);
    console.log(removeItem);
    setTodoList(removeItem);
  };

  const [seleted, setSeleted] = useState([]);
  const handleSelect = (data) => {
    const clickedItem = [...seleted, data];
    setSeleted(clickedItem);
  };

  return (
    <div>
      <div>{seleted}</div>
      <button className="btn btn-primary">All Delete</button>
      <TodoInput /> 
      <TodoItem
        todoList={todoList}
        handleRemove={handleRemove}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default TodoWrap;
