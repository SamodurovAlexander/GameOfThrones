import React from 'react';
import {useSelector} from 'react-redux'
import Menu from '../common/header/menu'
import Front from '../common/front'
import Card from '../common/card'
import charactersImg from '../assets/images/main.png'
import booksImg from '../assets/images/book.png'
import housesImg from '../assets/images/houses.png'

function Main() {
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
            <Front img={booksImg} title={'books'} height={'120px'} position={'relative'}/>
            <Front img={charactersImg} title={'characters'} height={'60vh'} position={'absolute'}/>
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px'
        }}>recently viewed</h1>
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

export default Main;