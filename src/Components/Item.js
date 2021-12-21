import React from 'react'
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estructura.scss'

const Item = ({id, nombre, precio, imagen, stock}) => {

    const agregarAlCarro = (cant) => {
        alert(`Se pusieron ${cant} items en el carro.`)
    }

    return (
        <div className="galeria">
            <div className="itemsTotal">
                <div className="item" id={id}>
                    <p className="cantStock">{stock}</p>
                    <p className="tituloItem">{nombre}</p>
                    <picture><img className="bordesRedondeados" src={imagen} alt=""/></picture>
                    <div className="precioProd">
                        <span className="precio-item">${precio}</span>
                        <ItemCount stock={stock} initial="1" onAdd={agregarAlCarro}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
