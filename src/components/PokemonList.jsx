import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemon }) => {
  return (
    <div className='PokemonList'>
      {pokemon.map((pokemon) => (<PokemonCard name={pokemon.name} key={pokemon.name} />))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemon: Array(10).fill('') //Esto crea un arreglo de 10 posiciones y cada posición lo llena con un espacio ''.
}

export default PokemonList