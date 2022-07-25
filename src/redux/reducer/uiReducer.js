import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
    loading: false,
});

//Creación del reducer
export const uiReducer = (state = initialState, action) => {
    console.log("🚀 ~ file: pokemonReducer.js ~ line 11 ~ pokemonReducer ~ state", state)
    switch (action.type) {
        case SET_LOADING:
            return state.setIn(['loading'], action.payload);

        default:
            //Cuando no conocemos el action type que esta llegando retorna el estado actual
            return state;
    }
}