import { SET_POKEMON } from "./types";

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
})