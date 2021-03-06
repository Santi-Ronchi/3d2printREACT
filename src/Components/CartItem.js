import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({id, nombre, precio, imagen, cantidad}) => {

    const {removeItem} = useContext(CartContext);

    return (
        <div className="carro-fila" id={id}>
            <span className="carro-item carro-columna carro-item-titulo"> {nombre}</span>
            <span className="carro-precio carro-columna">${precio}</span>
            <div className="carro-cant carro-columna">
                <input className="carro-cant-input" type="number" value={cantidad} readOnly></input>
                <button className="btn btn-block btn-danger rounded py-2 px-4 carro-cant-btn" onClick={() => {removeItem(id)}}>QUITAR</button>
            </div>
        </div>
    )
}

export default CartItem
