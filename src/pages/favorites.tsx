import React from 'react';
import Menu from "../common/header/menu";
import Card from "../common/card";
import {useSelector} from "react-redux";


function dataFinder(allStore:any, url: any):any{
  let foreignUrl = url
  console.log(foreignUrl)
  return allStore.filter((item:any) => item.url === foreignUrl)
}

function Favorites() {
    const favorites: any = useSelector((store:any) => store.favorites)
    const houses: any = useSelector((store:any) => store.houses)
  const characters: any = useSelector((store:any) => store.characters)
  const books: any = useSelector((store:any) => store.books)
  const allStore: any = [...houses, ...characters, ...books]
    console.log(allStore)
    let data = favorites.map((item:any)=>{
        return dataFinder(allStore, item)[0]
    })
    console.log(data)
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
            {data.map((item: any) => <Card
                key={item.url}
                data={item}/>)}
        </div>


    </>
  );
}

export default Favorites;