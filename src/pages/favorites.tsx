import React from 'react';
import Menu from "../common/header/menu";
import Card from "../common/card";
import {useSelector} from "react-redux";


function Favorites() {
    const favorites: any = useSelector((store:any) => store.favorites)
    const houses: any = useSelector((store:any) => store.houses)
    const characters: any = useSelector((store:any) => store.characters)
    const books: any = useSelector((store:any) => store.books)
    const allStore: any = [...houses, ...characters, ...books]
    let data = favorites.map((url:any)=>{
        return allStore.filter((item:any) => item.url === url)[0]
    })
  return (
    <>
        <Menu/>
        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'100px',
            border:'1px solid white'
        }}>favorites</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            {data.map((item: any) => <Card
                key={item.url}
                data={item}/>)}
        </div>


    </>
  );
}

export default Favorites;