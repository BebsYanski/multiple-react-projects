import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    <li className="pl-6 ">
      <div className="flex text-white items-center cursor-pointer gap-8">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus className="text-white text-2xl" />
            ) : (
              <FaPlus className="text-white text-2xl" />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
