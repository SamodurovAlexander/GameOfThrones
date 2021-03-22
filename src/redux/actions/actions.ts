import {getData} from "../../DAL/DAL";
import {RECENTLY_VIEWED, DEL_FAVORITES, ADD_FAVORITES, INITIAL} from "./types";

export const asyncGetData = ()=> {
    return async (dispatch:any) => {
        const data = await getData()
        dispatch({type: INITIAL, payload: data})
    }
}

export const addFavorites = ( url:string) => {
    return{type: ADD_FAVORITES,
            url: url,
    }
}
export const delFavorites = ( url:string) => {
    return{type: DEL_FAVORITES,
            url: url,
    }
}