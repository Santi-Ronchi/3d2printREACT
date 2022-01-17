import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem'

const Cart = () => {

    const {myData}= useContext(CartContext);
    const {getTotalItems} = useContext(CartContext);
    const {getTotalPrecio} = useContext(CartContext);

    let precioTotal = getTotalPrecio();

    return (
        <div className="detail-outside">
            <br></br>
            <h3 className="banner">Shopping Cart</h3>
            {getTotalItems() > 0 ? (
                <div>
                    <div className="carro-fila">
                        <span className="carro-item carro-titulo carro-columna">ITEM</span>
                        <span className="carro-precio carro-titulo carro-columna">PRECIO UNITARIO</span>
                        <span className="carro-cant carro-titulo carro-columna">CANTIDAD</span>
                    </div>
                    {myData.map(p => <CartItem key={p.id} id={p.id} nombre={p.titulo} precio={p.precio} imagen={p.imagen} cantidad={p.cantidad}/>)}
                    <div class="carro-total">
                      <strong class="carro-total-titulo">Total</strong>
                      <span class="carro-total-precio">${precioTotal}</span>
                    </div>
                </div>
                ):(
                    <div className="detail-outside">
                        <h4 className="banner ">Shopping Cart sin items a comprar</h4>
                        <Link to={`/`}><Button variant="outline-primary">HOME</Button></Link>
                    </div>
                )}
        </div>

        /*<div className="carro-fila" id="${id}">
            <span className="carro-item carro-columna carro-item-titulo">HOLA MAMA</span>
            <span className="carro-precio carro-columna">$loquetuquieras</span>
            <div className="carro-cant carro-columna">
                <input className="carro-cant-input" type="number" value="6" readOnly></input>
                <button role="button" className="btn btn-block btn-danger rounded py-2 px-4 carro-cant-btn">QUITAR</button>
            </div>
        </div>*/
    )
}

export default Cart
