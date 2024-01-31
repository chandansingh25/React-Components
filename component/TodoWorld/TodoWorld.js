import React, { useState } from "react";

const TodoWorld = () => {
  const [allList, setAllList] = useState([
    {
      id: 1,
      title: "title 1",
      description: "description 1",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
    },
    {
      id: 4,
      title: "title 4",
      description: "description 4",
    },
  ]);

  const handleDelete = (id) => {
    const medium = allList.filter((e) => e.id !== id);
    setAllList(medium);
  };

  return (
    <div>
      <ul className="list-group w-50 mt-5 ms-5">
        <div class="mb-3">
          <input
            type="text"
            placeholder="Enter Item"
            class="form-control shadow-none"
          />
        </div>

        {allList.map((list) => (
          <li
            key={list.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              <span className="badge bg-secondary">{list.id}</span> {list.title}{" "}
            </span>
            <span onClick={() => handleDelete(list.id)} role="button">
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWorld;
