import React, { useState } from "react";
import Display from "./Display";
import ButtonWrap from "./ButtonWrap";

const CalcWrap = () => {
  const [calcvalue, setcalcvalue] = useState([]);

  const setdisplay = (list) => {
    if (list === "C") {
      setcalcvalue("");
    } else if (list === "=") {
      const result = eval(calcvalue);
      setcalcvalue(result);
    } else {
      const newList = calcvalue + list;
      setcalcvalue(newList);
    }
  };

  return (
    <div className="border rounded p-3">
      <Display calcvalue={calcvalue} />
      <ButtonWrap btnclicked={(list) => setdisplay(list)} />
    </div>
  );
};

export default CalcWrap;
