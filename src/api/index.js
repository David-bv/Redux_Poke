import axios from 'axios'
import { url } from './url'

const getPokemon = () => {
  return axios
  .get(url)
  .then(res => res.data.results)
  .catch(err => console.log(err));
};

export default getPokemon