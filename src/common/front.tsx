import React from 'react';
import {Link} from "react-router-dom";

function Front(props:any) {
    let link = '/' + props.title
  return (
<Link to={link} style={{
        textDecoration:'none',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid white',
        position: 'relative',
        width: '200px',
        zIndex: 3}}>

    <div style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid white',
        position: 'relative',
        width: '200px',
        zIndex: 3
    }}>

              <h1 style={{ zIndex: 3, opacity: '0.7',position: 'absolute', }}>{props.title}</h1>
        <div style={{
            display: 'grid',
            justifyContent: 'center',
            alignContent: 'center',
            position: props.position,
            right: '7px',
            width: '100%',
            zIndex: 3
        }}>
            <img src={props.img} alt="" style={{ height: props.height, opacity: '0.5', zIndex: 0}}/>
        </div>
    </div>
      </Link>
  );
}

export default Front;