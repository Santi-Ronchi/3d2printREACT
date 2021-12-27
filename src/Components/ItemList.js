import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <ul className="flex-box detail-outside">
            {items.map(p => <Item key={p.id} id={p.id} nombre={p.nombre} precio={p.precio} imagen={p.imagen} stock={p.stock} descripcion={p.descripcion}/>)}
        </ul>
    )
}

export default ItemList
