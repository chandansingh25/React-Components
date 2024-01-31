import React from "react";

const FoodInput = ({handleChange}) => {


  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control bg-light shadow-none border"
        placeholder="Enter Item Here..."
        onKeyDown={handleChange}
      ></input>
    </div>
  );
};

export default FoodInput;
