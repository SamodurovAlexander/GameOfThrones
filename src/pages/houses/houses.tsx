import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import housesImg from "../../assets/images/houses.png";
import Card from "../../common/card";
import {useDispatch, useSelector} from "react-redux";
import { asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";

function Houses() {
    const houses: any = useSelector((store:any) => store.houses)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = houses.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'houses', setLoading)
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
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

        <h1 style={{
            display:'grid',
            justifyContent:'center',
            marginTop:'200px'
        }}>filter</h1>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}
        >
            {houses.map((house: any) => <Card
                key={house.url}
                data={house}/>)
            }

            {loading ? <Preloader/> : <button
                onClick={getMore}
                style={{background: 'white', border: 'none', fontSize: '20px'}}
            >show more houses
            </button>}

        </div>


    </>
  );
}

export default Houses;