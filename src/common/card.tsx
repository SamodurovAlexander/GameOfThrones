import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addFavorites,delFavorites} from '../redux/actions/actions'

function Card(props:any) {
    const favorites: any = useSelector((store:any) => store.favorites)
    const checkedStar = '★'
    const uncheckedStar = '☆'
    let isFavorite = false
    if (favorites.length){
     isFavorite = favorites.includes(props.data.url)
    }
    const toggleFavorites = () =>{
        const actionAdd  =  addFavorites(props.data.url)
        const actionDel  =  delFavorites(props.data.url)
        if(isFavorite ){
            dispatch(actionDel)
        }else{
            dispatch(actionAdd)
        }
    }
    const dispatch = useDispatch()

  return (
    <div style={{border: '1px solid white', margin: '20px', width: '500px', display: 'grid', justifyContent:'center', textAlign: 'center'}}>
        <h1>{props.data.name ? props.data.name : 'no name'}</h1>
        {props.data.gender ? <h2>gender: {props.data.gender} </h2>: null}
        {props.data.culture ? <h2>culture: {props.data.culture} </h2>: null}
        {props.data.born ? <h2> born: {props.data.born} </h2>: null}
        {props.data.numberOfPages ? <h2>number of pages: {props.data.numberOfPages} </h2>: null}
        {props.data.country ? <h2>country: {props.data.country} </h2>: null}
        {props.data.mediaType ? <h2>media type: {props.data.mediaType} </h2>: null}
        {props.data.region ? <h2>region: {props.data.region} </h2>: null}
        {props.data.words ? <h2>words: {props.data.words} </h2>: null}
        {props.data.coatOfArms ? <h2>coat of arms: {props.data.coatOfArms} </h2>: null}

        <div onClick={toggleFavorites}
             style={{fontSize: '30px', cursor: 'pointer'}}
        >{isFavorite ? checkedStar : uncheckedStar}</div>
    </div>
  );
}

export default Card;