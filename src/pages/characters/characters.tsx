import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import Card from "../../common/card";
import charactersImg from "../../assets/images/main.png";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";

function Characters() {
    const [loading, setLoading] = useState(false);
    const characters: any = useSelector((store:any) => store.characters)
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = characters.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'characters', setLoading)
        dispatch(getMoreAction)
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

        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px'
        }}>filter</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}>
            {characters.map((character: any) => <Card
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