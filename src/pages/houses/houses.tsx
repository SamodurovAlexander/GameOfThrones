import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import housesImg from "../../assets/images/houses.png";
import Card from "../../common/card";
import {useDispatch, useSelector} from "react-redux";
import { asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
import './houses.css';
import HousesType from './type'
// export type HousesType = {
//         url:string
//         name: string
//         region: string
//         coatOfArms: string
//         words: string
//         titles: Array<string>
//         seats: Array<string>
//         currentLord: string
//         heir: string
//         overlord: string
//         founded: string
//         founder: string
//         diedOut: string
//         ancestralWeapons: Array<string>
//         cadetBranches: Array<string>
//         swornMembers: Array<string>
// }
function Houses() {
    const houses: Array<HousesType> = useSelector((store:any) => store.houses)
    const [loading, setLoading] = useState(false);
    const [nameHouse, setNameHouse] = useState("");
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = houses.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'houses', setLoading)
        dispatch(getMoreAction)
    }
    let housesFilteredName = houses
    if(nameHouse){
        housesFilteredName = houses.filter((house:HousesType)=> house.name.includes(nameHouse))
    }
  return (
    <>
        <Menu/>
        <div className="housesFront">
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

       <div className="filterContainer">
                <div className="filter">
                    <h1>filter</h1>
                    <h2>house name:</h2>
                    <input type="text" style={{marginBottom:'30px'}} onInput={(e:any)=>{setNameHouse(e.target.value)}}/>
                </div>
        </div>
        <div className='housesContainer'
        >
            {housesFilteredName.map((house: any) => <Card
                key={house.url}
                data={house}/>)
            }

            {loading ? <Preloader/> : <button
                onClick={getMore}
            >show more houses
            </button>}

        </div>


    </>
  );
}

export default Houses;