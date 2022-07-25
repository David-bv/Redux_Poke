import { Col, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPokemon } from './api';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemonWithDetails, setLoading } from './redux/actions';
import logo from './statics/logo.svg';

function App() {

  //Recibe el estado y retorna el valor que deseo obtener del estado
  const pokemon = useSelector(s => s.getIn(['data', 'pokemon'], shallowEqual)).toJS();
  const loading = useSelector(s => s.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonResp = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonResp));
      dispatch(setLoading(false));
    }
    fecthPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //Cuando se monta en un componente se envía un arreglo vacio

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <PokemonList pokemon={pokemon} />
        )
      }
    </div>
  );
}

export default App;
//ant desing maneja 18 espacios