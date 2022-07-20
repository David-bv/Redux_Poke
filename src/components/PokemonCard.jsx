import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Meta } from 'antd/lib/list/Item'
import React from 'react'

const PokemonCard = ({ name, image, type }) => {
    return (
        <Card
            style={{ width: 250 }}
            title={name}
            cover={<img alt={name} src={image} />}
            extra={<StarOutlined/>}
        >
            <Meta description={type} />
        </Card>
    )
}

export default PokemonCard