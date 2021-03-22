import React from 'react';
import {Link} from 'react-router-dom'

function Item(props: any) {
    let link = '/'
    if(props.text !== 'main'){
        link ='/' + props.text
    }
  return (
    <li style={{
        border:'1px solid white',
        width:'90px',
        textAlign:'center',
        padding:'10px',
        zIndex: 3
    }}>
        <Link to={link} style={{
        textDecoration:'none',
        color: 'white'}}>{props.text}</Link>
    </li>
  );
}

export default Item;