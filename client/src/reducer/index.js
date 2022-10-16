import { GET_VIDEOGAMES, SET_SORT } from "../actions";

const initialState = {
    videogames :  []
};



const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
           // case SET_SORT:
            //const sort =  action.payload === "asc" ? state.videogames.sort((a,b) => {b.name.localeCompare(a.name)}) : 
            //action.payload === "desc" ? state.videogames.sort((a,b) => {a.name.localeCompare(b.name)}) : action.payload === "rating" ? state.videogames.sort((a,b)=> {a.rating - b.rating}) : state.videogames
           // return {
            //    ...state,
            //    videogames: sort
           // }
    }

} 





export default rootReducer;