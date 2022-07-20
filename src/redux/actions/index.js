import { getPokemonDetail } from "../../api";
import { SET_POKEMON } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
})

//crear action creator
export const getPokemonWithDetails = ( data = []) => async (dispatch) => {
    //Por cada respuesta, obtener los detalles de cada pokemon
    const pokemonDetailed = await Promise.all(
      data.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemon(pokemonDetailed));
  };