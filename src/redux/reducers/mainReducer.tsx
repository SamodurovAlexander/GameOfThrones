import {
	ADD_RECENTLY_VIEWED,
	ADD_FAVORITES,
	DEL_FAVORITES,
	INITIAL ,
	ADD_ITEM_BOOK,
	ADD_ITEM_CHARACTER,
	ADD_ITEM_HOUSE,
	ADD_BOOKS,
	ADD_CHARACTERS,
	ADD_HOUSES,} from '../actions/types'
import HousesType from '../../pages/houses/type'
import CharacterType from '../../pages/characters/type'
import BookType from '../../pages/books/type'

interface StateType{
	characters: Array<CharacterType>
	books: Array<BookType>
	houses:Array<HousesType>
	favorites:Array<string>
	recentlyViewed:Array<string>
}

const initialState:StateType = {
    characters: [],
	books: [],
	houses:[],
	favorites:[],
	recentlyViewed:[]
}
const mainReducer = (state=initialState, action:any) =>{
    switch (action.type){
		case INITIAL:
        	return {...state, ...action.payload};
		case ADD_RECENTLY_VIEWED:
			console.log('recently')
			let SRVC = JSON.parse(JSON.stringify(state))
			SRVC.recentlyViewed.push(action.url)
			return SRVC
		case ADD_FAVORITES:
			let SFC = JSON.parse(JSON.stringify(state))
			SFC.favorites.push(action.url)
			return SFC
		case DEL_FAVORITES:
			return {...state,favorites: state.favorites.filter(f => f !== action.url)}
		case ADD_ITEM_BOOK:
			let SIBC = {...state}
			SIBC['books'] = [...state.books,action.payload]
			return SIBC
		case ADD_ITEM_CHARACTER:
			let SICC = {...state}
			SICC['characters'] = [...state.characters,action.payload]
			return SICC
		case ADD_ITEM_HOUSE:
			let SIHC = {...state}
			SIHC['houses'] = [...state.houses,action.payload]
			return SIHC
		case ADD_BOOKS:
			let SIBSC = {...state}
			SIBSC['books'] = [...state.books,...action.payload]
			return SIBSC
		case ADD_CHARACTERS:
			let SICSC = {...state}
			SICSC['characters'] = [...state.characters,...action.payload]
			return SICSC
		case ADD_HOUSES:
			console.log(action.payload)
			let SIHSC = {...state}
			SIHSC['houses'] = [...state.houses,...action.payload]
			return SIHSC
        default:return state
    }
}

export default mainReducer