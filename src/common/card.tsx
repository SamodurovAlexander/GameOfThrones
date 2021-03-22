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
        <h2>{props.data.gender ? 'gender:' + props.data.gender : null}</h2>
        <h2>{props.data.culture ? 'culture:' + props.data.culture : null}</h2>
        <h2>{props.data.born ? 'born:' + props.data.born : null}</h2>
        <h2>{props.data.numberOfPages ? 'number of pages:' + props.data.numberOfPages : null}</h2>
        <h2>{props.data.country ? 'country:' + props.data.country : null}</h2>
        <h2>{props.data.mediaType ? 'media type:' + props.data.mediaType : null}</h2>
        <h2>{props.data.region ? 'region:' + props.data.region : null}</h2>
        <h2>{props.data.words ? 'words:' + props.data.words : null}</h2>
        <h2>{props.data.coatOfArms ? 'coat of arms:' + props.data.coatOfArms : null}</h2>

        <div onClick={toggleFavorites}
             style={{fontSize: '30px', cursor: 'pointer'}}
        >{isFavorite ? checkedStar : uncheckedStar}</div>
    </div>
  );
}

export default Card;