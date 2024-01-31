import React from "react";

const Display = ({ calcvalue }) => {
  return (
    <div
      className="shadow border w-100 rounded mb-3"
      style={{ maxWidth: "10rem" }}
    >
      <input
        type="text"
        className="w-100 border-0 py-2 rounded"
        value={calcvalue}
      />
    </div>
  );
};

export default Display;
