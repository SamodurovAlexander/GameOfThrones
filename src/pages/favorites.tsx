import React from 'react';
import Menu from "../common/header/menu";
import Card from "../common/card";

function Favorites() {
  return (
    <>
        <Menu/>
        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'100px'
        }}>favorites</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            <Card/>
            <Card/>
            <Card/>
        </div>


    </>
  );
}

export default Favorites;