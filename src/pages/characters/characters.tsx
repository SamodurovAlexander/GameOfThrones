import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import charactersImg from "../../assets/images/main.png";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
import DatePicker from "react-datepicker";
import CharacterType from './type'
import "./characters.css"

function Characters() {
    const [loading, setLoading] = useState(false);
    const unfilteredCharacters: Array<CharacterType> = useSelector((store:any) => store.characters)
    const [characterName, setCharacterName] = useState('');
    const [characterGender, setCharacterGender] = useState();
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = unfilteredCharacters.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'characters', setLoading)
        dispatch(getMoreAction)
    }
    let charactersFilteredGender = unfilteredCharacters
    if(characterGender){
        charactersFilteredGender = unfilteredCharacters.filter((character:CharacterType)=> character.gender === characterGender)
    }
    let charactersFilteredName = charactersFilteredGender
    if(characterName){
        charactersFilteredName = charactersFilteredGender.filter((character:CharacterType)=> character.name.includes(characterName))
    }
  return (
    <>
        <Menu/>
        <div className="charactersFront">
            <Front img={charactersImg} title={'characters'} height={'60vh'} position={'absolute'}/>
        </div>

        <div className="filterContainer">
                <div className="filter">
                    <h1>filter</h1>
                    <h2>gender:</h2>
                    <select onChange={(e:any)=>{setCharacterGender(e.target.value)}}>
                      <option selected value={''}>all</option>
                      <option value={'Male'}>male</option>
                      <option value={'Female'}>female</option>
                    </select>
                    <h2>characters name:</h2>
                    <input type="text" style={{marginBottom:'30px'}} onInput={(e:any)=>{setCharacterName(e.target.value)}}/>
                </div>
        </div>
        <div className='charactersContainer'>
            {charactersFilteredName.map((character: CharacterType) => <Card
                key={character.url}
                data={character}/>)
            }
            {loading ? <Preloader/> : <button
                onClick={getMore}
            >show more characters
            </button>}
        </div>


    </>
  );
}

export default Characters;