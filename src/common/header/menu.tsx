import React, {useState} from 'react';
import Item from "./item";
import logo from "../../assets/images/logo.png";
import "./menu.css";

function Menu() {
  return (
    <>
      <input type="checkbox" id="burger-checkbox" name="burger-checkbox"/>

        <label className="burger-label" htmlFor="burger-checkbox">
          <div className="burger">
            <div className="upline"></div>
            <div className="midline"></div>
            <div className="downline"></div>
          </div>
        </label>
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
