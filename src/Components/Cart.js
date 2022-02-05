import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem'
import CartForm from './CartForm';

const Cart = () => {

    const {listaProductos}= useContext(CartContext);
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
                    {listaProductos.map(p => <CartItem key={p.id} id={p.id} nombre={p.titulo} precio={p.precio} imagen={p.imagen} cantidad={p.cantidad}/>)}
                    <div className="carro-total">
                      <strong className="carro-total-titulo">Total</strong>
                      <span className="carro-total-precio">${precioTotal}</span>
                    </div>
                    <br/>
                    <br/>
                    <CartForm></CartForm>

                    
                </div>
                ):(
                    <div className="detail-outside">
                        <h4 className="banner ">Shopping Cart sin items a comprar</h4>
                        <Link to={`/`}><Button variant="outline-primary">HOME</Button></Link>
                    </div>
                )}
        </div>
    )
}

export default Cart
