import React from 'react'
import cart from '../media/minicart.png';
import { Nav } from 'react-bootstrap';

const CartWidget = () => {
    return (
        <div>
            <Nav.Link href="#action31"><img src={cart} alt="Carrito de compras" height="40" width="40"/></Nav.Link>
        </div>
    )
}

export default CartWidget
