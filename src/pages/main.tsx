import React from 'react';
import {useSelector} from 'react-redux'
import Menu from '../common/header/menu'
import Front from '../common/front'
import Card from '../common/card'
import charactersImg from '../assets/images/main.png'
import booksImg from '../assets/images/book.png'
import housesImg from '../assets/images/houses.png'
import {HousesType} from "./houses/houses";
import {BookType} from "./books/books";
import {CharacterType} from "./characters/characters";


function Main() {
    const recentlyViewed: Array<string> = useSelector((store:any) => store.recentlyViewed)
    const houses: Array<HousesType> = useSelector((store:any) => store.houses)
    const characters: Array<CharacterType> = useSelector((store:any) => store.characters)
    const books: Array<BookType> = useSelector((store:any) => store.books)
    const allStore: Array<BookType|CharacterType|HousesType> = [...houses, ...characters, ...books]
    let dataRecentlyViewed = recentlyViewed.map((url:string)=>{
        return allStore.filter((item:BookType|CharacterType|HousesType) => item.url === url)[0]
    })
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

        {dataRecentlyViewed.length ? <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px',
            border: '1px solid white'
        }}>recently viewed</h1> : null}
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            {dataRecentlyViewed.map((item: BookType|CharacterType|HousesType) => <Card
                key={item.url}
                data={item}/>)}
        </div>


    </>
  );
}

export default Main;