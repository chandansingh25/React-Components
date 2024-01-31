import React from "react";
import { Button } from "react-bootstrap";

const FoodItem = ({ foodList,handlebybtn,bought }) => {
  return (
    <div>
      <ul className="list-group">
        {foodList.map((list, index) => (
          <li className={`list-group-item d-flex justify-content-between align-items-center ${bought(list) && 'active'}`} key={index}>
            {list}
            <Button className="btn btn-dark" onClick={()=>handlebybtn(list)}>Click</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
