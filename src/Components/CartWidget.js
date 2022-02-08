import React from 'react'
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const {listaProductos}= useContext(CartContext);
    const {getTotalItems} = useContext(CartContext);

    useEffect( ()=>{
        getTotalItems();
    },[listaProductos]);

    return (
            <div>
                {getTotalItems() > 0 ? (
                <Link to={`/cart`} className="noStyle">
                    <FontAwesomeIcon className='icon' icon={faShoppingCart} />
                    <div><h6 className="p-carro">{getTotalItems(listaProductos)}</h6></div>
                </Link>
                ): null}
            </div>
            
    )
}

export default CartWidget

