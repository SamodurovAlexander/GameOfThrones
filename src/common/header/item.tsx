import React from 'react';
import {Link} from 'react-router-dom'

type ItemPropsType = {
    text: string
}

function Item(props:ItemPropsType) {
    let link = '/'
    if(props.text !== 'main'){
        link ='/' + props.text
    }
  return (
    <li>
        <Link to={link}>{props.text}</Link>
    </li>
  );
}

export default Item;