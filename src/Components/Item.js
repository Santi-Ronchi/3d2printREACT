import React from 'react'
import ItemCount from './ItemCount';
import { useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estructura.scss'

const Item = ({id, nombre, precio, imagen, stock, descripcion}) => {

  const [agregado, setAgregado] = useState(false);
  const { addProducto } = useContext(CartContext);
  
  const sendItem = (cantidad) => {
     let dentroDelStock = addProducto(id, nombre, precio, cantidad, stock, imagen);
     return dentroDelStock;
  };

  const  agregadoOk = (cantidad) => {
    let stockSinProblemas = sendItem(cantidad);
    if(stockSinProblemas === true){
      setAgregado(true);
    }else{
      alert("La suma de productos de " + nombre + " supera el stock.");
    }
  }

    return (
            <div className="galeria">
                <div className="itemsTotal">
                    <div className="item" id={id}>
                        <p className="cantStock">{stock}</p>
                        <p className="tituloItem">{nombre}</p>
                        <Link to={`/product/${id}`}><img className="bordesRedondeados" src={imagen} alt={descripcion}/></Link>
                        <div className="precioProd">
                            <span className="precio-item">${precio}</span>
                            {!agregado &&
                                <div className= "detail-outside">
                                  <ItemCount stock={stock} initial="1" onAdd={agregadoOk}/>
                                </div>
                                }{agregado  &&
                                <div className= "detail-outside">
                                <h6>Agregado!</h6>
                                <br/>
                                <Link to={`/cart`}><Button variant="outline-primary">Ir al carrito</Button></Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Item
