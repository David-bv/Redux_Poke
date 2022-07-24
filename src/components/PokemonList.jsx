import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemon }) => {
  return (
    <div className='PokemonList'>
      {pokemon.map((pokemon) => (
        <PokemonCard 
          id={pokemon.id}
          name={pokemon.name}  
          image={pokemon.sprites.front_default} 
          type={pokemon.types}
          key={pokemon.name} 
          //favorite toma el valor booleano de la propiedad favorite colcoada en el reducer de SET_FAVORITE
          favorite={pokemon.favorite}
        />))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemon: Array(10).fill('') //Esto crea un arreglo de 10 posiciones y cada posición lo llena con un espacio ''.
}

export default PokemonList