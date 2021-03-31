import React from 'react';
import {useSelector} from 'react-redux'
import Menu from '../common/header/menu'
import Front from '../common/front'
import Card from '../common/card'
import charactersImg from '../assets/images/main.png'
import booksImg from '../assets/images/book.png'
import housesImg from '../assets/images/houses.png'
import HousesType from "./houses/type";
import BookType from "./books/type";
import CharacterType from "./characters/type";
import './main.css';


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
        <div className='mainFrontContainer'>
            <Front img={booksImg} title={'books'} height={'120px'} position={'relative'}/>
            <Front img={charactersImg} title={'characters'} height={'60vh'} position={'absolute'}/>
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

        {dataRecentlyViewed.length ? <h1 className='mainTitle'>recently viewed</h1> : null}
        <div className='mainContainer'>
            {dataRecentlyViewed.map((item: BookType|CharacterType|HousesType) => <Card
                key={item.url}
                data={item}/>)}
        </div>


    </>
  );
}

export default Main;