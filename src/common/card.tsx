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
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Error excepturi fugiat ipsam obcaecati porro!
            Adipisci amet atque cum dolor illo inventore,
            minima odit perspiciatis possimus quidem quis reiciendis, sapiente voluptatem.
        </h2>
        <div onClick={toggleFavorites}
             style={{fontSize: '30px', cursor: 'pointer'}}
        >{isFavorite ? checkedStar : uncheckedStar}</div>
    </div>
  );
}

export default Card;