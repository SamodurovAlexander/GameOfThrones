import {RECENTLY_VIEWED, ADD_FAVORITES, DEL_FAVORITES, INITIAL } from '../actions/types'

const initialState = {
    characters: [{}],
	books: [{}],
	houses:[{}],
	favorites:[],
	recentlyViewed:[{}]
}
const mainReducer = (state=initialState, action:any) =>{
    switch (action.type){
		case INITIAL:
        	return {...state, ...action.payload};
		case RECENTLY_VIEWED:
			return state
		case ADD_FAVORITES:
			let SFC = JSON.parse(JSON.stringify(state))
			SFC.favorites.push(action.url)
			return SFC
		case DEL_FAVORITES:
			return {...state,favorites: state.favorites.filter(f => f !== action.url)}
        default:return state
    }
}

export default mainReducer