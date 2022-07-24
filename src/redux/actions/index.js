import { getPokemonDetail } from "../../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
}) 

export const setFavorite = (payload) => {
  console.log("🚀 ~ file: index.js ~ line 19 ~ setFavorite ~ payload", payload)
  return {
    type: SET_FAVORITE,
    payload
  }  
}

//crear action creator
export const getPokemonWithDetails = ( data = []) => async (dispatch) => {
    //Por cada respuesta, obtener los detalles de cada pokemon
    const pokemonDetailed = await Promise.all(
      data.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemon(pokemonDetailed));
  };