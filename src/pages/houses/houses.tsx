import React from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import housesImg from "../../assets/images/houses.png";
import Card from "../../common/card";
import {useSelector} from "react-redux";

function Houses() {
    const houses: any = useSelector((store:any) => store.houses)
  return (
    <>
        <Menu/>
        <div style={{
            display:'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
            position: "relative",
            height: '60vh',
            zIndex: 2
        }}>
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px'
        }}>filter</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>

            {houses.map((house: any) => <Card
                key={house.url}
                data={house}/>)}
        </div>


    </>
  );
}

export default Houses;