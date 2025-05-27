import React from "react";
import MenuList from "./MenuList";
import "./style.css";

const TreeView = ({ menu = [] }) => {
  return (
    <div className="section tree-view-container">
      <h2 className="text-center text-5xl font-bold">Tree View Menu</h2>
      <MenuList list={menu} />
    </div>
  );
};

export default TreeView;
