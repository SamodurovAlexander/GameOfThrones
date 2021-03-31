import React from "react";
import Item from "./item";
import logo from "../../assets/images/logo.png";
import "./menu.css";

function Menu() {
  return (
    <>
      <ul>
        <Item text={"main"} />
        <Item text={"books"} />
        <Item text={"characters"} />
        <Item text={"houses"} />
        <Item text={"favorites"} />
      </ul>
      <div className="logo">
        <img
          src={logo}
          alt=""
        />
      </div>
    </>
  );
}

export default Menu;
