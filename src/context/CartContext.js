import React, { createContext, useState } from 'react';


export const CartContext = createContext();



const CarroContextProvider = ({ children }) => {

  const [listaProductos, setListaProductos] = useState([]);

  const addProducto = (id, titulo, precio, cantidad, stock, imagen) => {
    const exists = listaProductos.find(p => p.id === id);
    if (exists && exists.cantidad + cantidad <= stock){
      exists.cantidad += cantidad;
      setListaProductos( [...listaProductos] );
      return true;
    }else if (exists && exists.cantidad + cantidad > stock){
      return false;
    };
    setListaProductos([...listaProductos, { id, titulo, precio, cantidad, stock }]);
    return true;
  };

  const clearCart = () => {
    setListaProductos([]);
  }

  const removeItem = (id) => {
    const newCart = listaProductos.filter((item) => item.id !== id)
    setListaProductos(newCart)
  }

  const getTotalItems = () => {
    let totalItems = 0;
    listaProductos.map(element => {
      totalItems += element.cantidad
      return totalItems;
    });
    return totalItems;
  }

  const getTotalPrecio = () => {
    let totalPrecio = 0;
    listaProductos.map(element => {
      totalPrecio += element.precio * element.cantidad
      return totalPrecio;
    });
    return totalPrecio;
  }

  return (
    <CartContext.Provider value={{ listaProductos, addProducto, getTotalItems, getTotalPrecio, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CarroContextProvider;
