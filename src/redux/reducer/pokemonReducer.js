import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMON } from "../actions/types";

const initialState = fromJS({
    pokemon: [],
});

//Creación del reducer
export const pokemonReducer = (state = initialState, action) => {
    console.log("🚀 ~ file: pokemonReducer.js ~ line 11 ~ pokemonReducer ~ state", state)
    switch (action.type) {
        case SET_POKEMON:
            /** Se modifica el spread operator por la lirebria de inmmutable */
            return state.setIn(['pokemon'], fromJS(action.payload));

        case SET_FAVORITE:
            const currentPokemonIndex = state.get('pokemon').findIndex(
                (pokemon) => {
                    console.log(pokemon.get('id'), action.payload.pokemonId);
                    return pokemon.get('id') === action.payload.pokemonId;
                });

            if (currentPokemonIndex < 0) {
                return state;
            }

            //crea una propiedad favorite y la setea como true o false en el arreglo newPokemonList 

            /** utilizando el metodo get para obtener la información  */
            //const isFavorite = state.get('pokemon').get(currentPokemonIndex).get('favorite')[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite

            //Refactorizando la linea 38 se obtiene usando el método getIn
            const isFavorite = state.getIn(['pokemon', currentPokemonIndex, 'favorite'])

            return state.setIn(['pokemon', currentPokemonIndex, 'favorite'], !isFavorite);

        default:
            //Cuando no conocemos el action type que esta llegando retorna el estado actual
            return state;
    }
}