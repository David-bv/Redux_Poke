import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/types";

const initialState = {
    pokemon: [],
    loading: false,
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
        case SET_FAVORITE: 
                const newPokemonList = [...state.pokemon];
                const currentPokemonIndex = newPokemonList.findIndex(
                    (pokemon) => {
                        console.log(pokemon.id, action.payload.id);
                        return pokemon.id === action.payload.pokemonId;
                    });

                if (currentPokemonIndex < 0) {
                    return state;
                }

                /*
                console.log("🚀 ~ file: pokemonReducer.js ~ line 25 ~ pokemonReducer ~ currentPokemonIndex", currentPokemonIndex)
                const test1 = newPokemonList[currentPokemonIndex];
                console.log("🚀 ~ file: pokemonReducer.js ~ line 31 ~ pokemonReducer ~ test1", test1)
                const test = newPokemonList[currentPokemonIndex].favorite;
                console.log("🚀 ~ file: pokemonReducer.js ~ line 29 ~ pokemonReducer ~ test", test)
                */

                //crea una propiedad favorite y la setea como true o false en el arreglo newPokemonList 
                newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

                return {
                    ...state,
                    pokemon: newPokemonList,
                }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            //Cuando no conocemos el action type que esta llegando retorna el estado actual
            return state;
    }
}