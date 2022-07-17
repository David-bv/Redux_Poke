import { SET_POKEMON } from "../actions/types";

const initialState = {
    pokemon: [],
};

//Creación del reducer
export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return{
                //tomar lo que tenbemos en el estado actual y agregarle el payload
                ...state,
                pokemon: action.payload,
            }
        default:
            //Cuando no conocemos el action type qu esta llegando retorna el estado actual
            return state;
    }
}