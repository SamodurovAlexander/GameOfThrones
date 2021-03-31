import React, {useEffect} from 'react';
import Menu from "../common/header/menu";
import {Link, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToRecentlyViewed, asyncGetItem} from "../redux/actions/actions";
import Preloader from "../common/preloader";
import HousesType from "./houses/type";
import BookType from "./books/type";
import CharacterType from "./characters/type";
import {Dispatch} from "redux";
import './item.css';


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
  return <><tr><th>characteristic</th><th>description</th></tr>{table}</>
}

function dataFinder(allStore:Array<HousesType|CharacterType|BookType>,
                    foreignUrl: string,
                    dispatch:Dispatch,
                    actionItem:any):any{
  let fData = allStore.filter((item:HousesType|CharacterType|BookType) => item.url === foreignUrl)
  if (fData.length) {
    return fData
  }else{
    dispatch(actionItem)
  }
}

function Item() {
  let { url } = useRouteMatch();
  let foreignUrl = 'https://anapioficeandfire.com/api' + url
  const dispatch = useDispatch()
  const actionItem = asyncGetItem(foreignUrl)
  const houses: Array<HousesType> = useSelector((store:any) => store.houses)
  const characters: Array<CharacterType> = useSelector((store:any) => store.characters)
  const books: Array<BookType> = useSelector((store:any) => store.books)
  const allStore: Array<HousesType|CharacterType|BookType> = [...houses, ...characters, ...books]
  let table:any = <Preloader />
  let data = dataFinder(allStore, foreignUrl, dispatch, actionItem)
  if (data){
    table = tableGenerator(data)
  }

  const recentlyViewed: Array<string> = useSelector((store:any) => store.recentlyViewed)
  let isRecentlyViewed = recentlyViewed.includes(foreignUrl)
  if (!isRecentlyViewed){
        dispatch(addToRecentlyViewed(foreignUrl))
  }


  return (
      <>
        <Menu/>
      <div className="itemContainer">
        <div className='arrowBack'>←</div>
          <table>
            {table}
          </table>
        </div>
        </>
  );
}




export default Item;