import React, { createContext, useState } from 'react';


export const CartContext = createContext();



const CarroContextProvider = ({ children }) => {

  const [myData, setMyData] = useState([]);
  console.log(myData);

  const addProducto = (id, titulo, precio, cantidad, stock, imagen) => {
    const exists = myData.find(p => p.id === id);
    if (exists && exists.cantidad + cantidad <= stock){
      exists.cantidad += cantidad;
      return setMyData( [...myData] )
    }else if (exists && exists.cantidad + cantidad > stock){
      return alert("El stock solo dispone de " + stock + " unidades")
    };
    setMyData([...myData, { id, titulo, precio, cantidad }]);
  };

  const clearCart = () => {
    setMyData([]);
  }

  const removeItem = (id) => {
    const newCart = myData.filter((item) => item.id !== id)
    setMyData(newCart)
  }

  const getTotalItems = () => {
    let totalItems = 0;
    myData.map(element => {
        totalItems += element.cantidad
    });
    return totalItems;
  }

  const getTotalPrecio = () => {
    let totalPrecio = 0;
    myData.map(element => {
        totalPrecio += element.precio * element.cantidad
    });
    return totalPrecio;
  }

  return (
    <CartContext.Provider value={{ myData, addProducto, getTotalItems, getTotalPrecio, removeItem, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CarroContextProvider;
