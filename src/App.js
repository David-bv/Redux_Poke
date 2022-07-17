import { Col } from 'antd';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import getPokemon from './api';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { setPokemon as setPokemonActions } from './redux/actions';
import logo from './statics/logo.svg';

function App({pokemon, setPokemon}) {

  useEffect(() => {
    const fecthPokemon = async () => { 
      const pokemonResp = await getPokemon();
      setPokemon(pokemonResp);
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

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

const mapDispacthToProps = (dispacth) => ({
  setPokemon:(value) => dispacth(setPokemonActions(value)),
});

export default connect(mapStateToProps, mapDispacthToProps) (App);

//ant desing maneja 18 espacios