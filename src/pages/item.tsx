import React from 'react';
import Menu from "../common/header/menu";
import {Link, useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";


function isLink(item:any){
  let result = item.match(/https:\/\/anapioficeandfire\.com\/api\//gm);
  if(result){
    return true
  }else{
    return false
  }
}

function getLink(item:any){
  return item.replace( /https:\/\/anapioficeandfire\.com\/api\//gm, "" )
}

function tableGenerator(data:any){
    let table = Object.entries(data[0]).map((item:any) => {
    let value = item[1]
    if(Array.isArray(value)){
      value = item[1].map((item:any) => {
        if(isLink(item)){
          let link = getLink(item)
          return <tr><Link to={`/${link}`}>{item}</Link></tr>
        }else{
          return <tr>{item}</tr>
        }
      })
    }
    return <tr><td>{item[0]}</td><td><table>{value}</table></td></tr>
  })
  return table
}

function dataFinder(allStore:any, url: any):any{
  let foreignUrl = 'https://anapioficeandfire.com/api' + url
  return allStore.filter((item:any) => item.url === foreignUrl)
}

function Item() {
  let { url } = useRouteMatch();
  const houses: any = useSelector((store:any) => store.houses)
  const characters: any = useSelector((store:any) => store.characters)
  const books: any = useSelector((store:any) => store.books)
  const allStore: any = [...houses, ...characters, ...books]
  let data = dataFinder(allStore, url)
  let table:any = 'no data'
  if (data){
    table = tableGenerator(data)
  }
  return (
      <>
        <Menu/>
      <div style={{display: 'flex', justifyContent:'center', marginTop:'120px', paddingBottom:'20px'}}>
        <div style={{fontSize:'50px', border: '1px solid white', marginRight: '40px'}}>←</div>
          <table style={{border: '1px solid white'}}>
            <tr>
              <th>characteristic</th>
              <th>description</th>
            </tr>
            {table}
          </table>
        </div>
        </>
  );
}




export default Item;