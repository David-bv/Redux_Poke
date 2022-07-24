import { Card } from 'antd'
import { Meta } from 'antd/lib/list/Item'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../redux/actions'
import StarButton from './StarButton'

const PokemonCard = ({ name, image, type, id, favorite }) => {

    /* if (favorite===true || favorite===false) {
        console.log("🚀 ~ file: PokemonCard.jsx ~ line 9 ~ PokemonCard ~ favorite", favorite)
    } */

    const dispatch = useDispatch();

    const typesString = type.map(t => t.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    }
    
    return (
        <Card
            style={{ width: 250 }}
            title={name}
            cover={<img alt={name} src={image} />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
        >
            <Meta description={typesString} />
        </Card>
    )
}

export default PokemonCard