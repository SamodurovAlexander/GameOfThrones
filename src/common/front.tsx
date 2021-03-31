import React from "react";
import { Link } from "react-router-dom";
import "./front.css";

function Front(props: any) {
  let link = "/" + props.title;
  return (
    <Link to={link} className="frontLink">
      <div className="frontContainer">
        <h1 className="frontTitle">{props.title}</h1>
        <div style={{ position: props.position }}>
          <img src={props.img} alt="" style={{ height: props.height }} />
        </div>
      </div>
    </Link>
  );
}

export default Front;
