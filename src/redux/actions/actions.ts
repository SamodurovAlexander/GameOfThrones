import {getData, getItem, getMore} from "../../DAL/DAL";
import {
    RECENTLY_VIEWED,
    DEL_FAVORITES,
    ADD_FAVORITES,
    INITIAL,
    ADD_ITEM_BOOK,
    ADD_ITEM_CHARACTER,
    ADD_ITEM_HOUSE,
    ADD_HOUSES,
    ADD_CHARACTERS,
    ADD_BOOKS} from "./types";

export const asyncGetData = ()=> {
    return async (dispatch:any) => {
        const data = await getData()
        dispatch({type: INITIAL, payload: data})
    }
}
export const asyncGetItem = ( url:string) => {
    return async (dispatch:any) => {
        let itemChecker:any = url.match(/books|characters|houses/gm)
        const data = await getItem(url)
        if(itemChecker[0] === 'books'){
            dispatch({type: ADD_ITEM_BOOK, payload: data})
        }else if(itemChecker[0] === 'characters'){
            dispatch({type: ADD_ITEM_CHARACTER, payload: data})
        }else{
            dispatch({type: ADD_ITEM_HOUSE, payload: data})
        }
    }
}
export const asyncGetMore = (page: any, name: string, setLoading:any)=> {
    return async (dispatch:any) => {
        const data = await getMore(page, name)
        setLoading(false)
        if(name === 'books'){
            dispatch({type: ADD_BOOKS, payload: data})
        }else if(name === 'characters'){
            dispatch({type: ADD_CHARACTERS, payload: data})
        }else{
            dispatch({type: ADD_HOUSES, payload: data})
        }
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