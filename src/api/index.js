import axios from 'axios'
import { url } from './url'

export const getPokemon = () => {
  return axios
  .get(url)
  .then(res => res.data.results)
  .catch(err => console.log(err));
};

export const getPokemonDetail = (pokemon) => {
  return axios
  .get(pokemon.url)
  .then(res => res.data)
  .catch(err => console.log(err));
};