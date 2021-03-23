import React from 'react';
import Item from './item'
import logo from '../../assets/images/logo.png'

function Menu() {
  return (
      <>
          <ul style={{
                display:'flex',
                justifyContent: 'space-around',
                textDecoration: 'none',
                listStyle:'none',
                marginTop:'0px',
                padding:'20px',
            }}>
                <Item text={'main'}/>
                <Item text={'books'}/>
                <Item text={'characters'}/>
                <Item text={'houses'}/>
                <Item text={'favorites'}/>
          </ul>
          <div style={{display: 'flex', justifyContent:'center', width: '100%', position: 'relative', zIndex: 0}}>
            <img src={logo} alt="" style={{ height:'120px', position: 'absolute', top: '-20px'}}/>
          </div>
      </>
  );
}

export default Menu;