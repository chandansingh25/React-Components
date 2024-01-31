import React, { useState } from "react";
import FoodItem from "./FoodItem";
import FoodInput from "./FoodInput";

const FoodWrap = () => {
  const [foodList, setFoodList] = useState(["item1", "item2"]);

  const handleChange = (event) => {
    if (event.key == "Enter") {
      let newItem = event.target.value;
      event.target.value = "";
      let newList = [newItem, ...foodList];
      setFoodList(newList);
    }
  };

  const [activeList, setActiveList] = useState([]);

  const handleDeclare = (list) => {
    // console.log(list)
    const newList = [...activeList, list];
    setActiveList(newList);
  

   
  };

  return (
    <div className="mt-5 ms-5 border rounded col-md-4 p-3">
      <FoodInput handleChange={handleChange} />
      <FoodItem
        foodList={foodList}
        bought={(list) => activeList.includes(list)}
        handlebybtn={(list) => handleDeclare(list)}
      />
      {activeList}


    </div>
  );
};  

export default FoodWrap;
