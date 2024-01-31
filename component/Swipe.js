import React, { useState } from "react";

function Swipe() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [selectedItems, setSelectedItems] = useState([]); // State for storing selected items

  const handleItemClick = (item) => {
    const updatedSelectedItems = [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
  };

  // const handleItemClick = (item) => {
  //     // Remove the item from the original array
  //     const updatedItems = items.filter((i) => i.id !== item.id);
  //     console.log()
  //     setItems(updatedItems);

  //     // Add the item to the "Selected Items" array
  //     setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  //   };

  return (
    <div>
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleItemClick(item)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Selected Items</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Swipe;
