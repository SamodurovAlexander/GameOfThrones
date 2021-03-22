import React from 'react';
import { useRouteMatch } from 'react-router-dom'

function Item() {
  let { url } = useRouteMatch();
  return (
    <h1>
        {url}
    </h1>
  );
}

export default Item;