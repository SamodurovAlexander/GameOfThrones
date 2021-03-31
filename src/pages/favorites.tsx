import React from 'react';
import Menu from "../common/header/menu";
import Card from "../common/card";
import {useSelector} from "react-redux";
import HousesType from "./houses/type";
import BookType from "./books/type";
import CharacterType from "./characters/type";
import './favorites.css';


function Favorites() {
    const favorites: Array<string> = useSelector((store:any) => store.favorites)
    const houses: Array<HousesType> = useSelector((store:any) => store.houses)
    const characters: Array<CharacterType> = useSelector((store:any) => store.characters)
    const books: Array<BookType> = useSelector((store:any) => store.books)
    const allStore: Array<CharacterType | BookType | HousesType> = [...houses, ...characters, ...books]
    let data = favorites.map((url:any)=>{
        return allStore.filter((item:any) => item.url === url)[0]
    })
  return (
    <>
        <Menu/>
        <h1 className='favoritesTitle'>favorites</h1>
        <div className='favoritesContainer'>
            {data.map((item: any) => <Card
                key={item.url}
                data={item}/>)}
        </div>


    </>
  );
}

export default Favorites;