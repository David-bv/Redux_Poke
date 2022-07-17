import { Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemon from './api';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { setPokemon } from './redux/actions';
import logo from './statics/logo.svg';

function App() {

  //Recibe el estado y retorna el valor que deseo obtener del estado
  const pokemon = useSelector(s => s.pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    const fecthPokemon = async () => { 
      const pokemonResp = await getPokemon();
      dispatch(setPokemon(pokemonResp));
    }
    fecthPokemon();
  }, [])
  //Cuando se monta en un componente se envía un arreglo vacio

  console.log('state', pokemon);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
//ant desing maneja 18 espacios