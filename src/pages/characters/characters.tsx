import React from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import charactersImg from "../../assets/images/main.png";
import {useSelector} from "react-redux";

function Characters() {
    const characters: any = useSelector((store:any) => store.characters)
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
            <Front img={charactersImg} title={'characters'} height={'60vh'} position={'absolute'}/>
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
            {characters.map((character: any) => <Card
                key={character.url}
                data={character}/>)}
        </div>


    </>
  );
}

export default Characters;