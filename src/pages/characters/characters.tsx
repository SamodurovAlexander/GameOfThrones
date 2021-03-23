import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import charactersImg from "../../assets/images/main.png";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
import DatePicker from "react-datepicker";

function Characters() {
    const [loading, setLoading] = useState(false);
    const unfilteredCharacters: any = useSelector((store:any) => store.characters)
    const [characterName, setCharacterName] = useState();
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
        charactersFilteredGender = unfilteredCharacters.filter((character:any)=> character.gender === characterGender)
    }
    let charactersFilteredName = charactersFilteredGender
    if(characterName){
        charactersFilteredName = charactersFilteredGender.filter((character:any)=> character.name.includes(characterName))
    }
  return (
    <>
        <Menu/>
        <div style={{
            display:'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
            position: "relative",
            height: '60vh',
            zIndex: 2
        }}>
            <Front img={charactersImg} title={'characters'} height={'60vh'} position={'absolute'}/>
        </div>

        <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginBottom: '200px'
            }}>
                <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginTop:'200px',
                        border: '1px solid white',
                        textAlign: 'center',
                        width: '500px'
                    }}>
                    <h1 style={{
                        display:'grid',
                        justifyContent:'center',
                    }}>filter</h1>
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
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            {charactersFilteredName.map((character: any) => <Card
                key={character.url}
                data={character}/>)
            }
            {loading ? <Preloader/> : <button
                onClick={getMore}
                style={{background: 'white', border: 'none', fontSize: '20px'}}
            >show more characters
            </button>}
        </div>


    </>
  );
}

export default Characters;