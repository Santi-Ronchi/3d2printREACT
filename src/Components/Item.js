import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estructura.scss'

const Item = ({nombre, precio, imagen, id, stock}) => {
    return (
        <div className="galeria">
            <div className="itemsTotal">
                <div className="item" id={id}>
                    <p className="cantStock">{stock}</p>
                    <p className="tituloItem">{nombre}</p>
                    <picture><img className="bordesRedondeados" src={imagen} alt="" height="216" width="216"/></picture>
                    <div className="precioProd">
                        <span className="precio-item">${precio}</span>
                        <Button role="button" className="btn btn-block btn-primary rounded py-2 px-4 btn-agregar-carro">AL CARRO</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
