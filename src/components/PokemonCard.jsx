import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Meta } from 'antd/lib/list/Item'
import React from 'react'

const PokemonCard = ({ name }) => {
    return (
        <Card
            style={{ width: 250 }}
            title={name}
            cover={<img alt="Ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />}
            extra={<StarOutlined/>}
        >
            <Meta description="Ditto is a  normal Pokémon" />
        </Card>
    )
}

export default PokemonCard