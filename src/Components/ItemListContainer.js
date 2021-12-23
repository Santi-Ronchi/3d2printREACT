import React from 'react'
import ItemList from './ItemList';
import StockData from './StockData'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

  useEffect(() => {
    
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        // hacemos el resolve de nuestro array. no hace falta el reject
        resolve(StockData);
      }, 2000);
    });

    // traemos los datos de nuestra promise y los ponemos en el estado
    getItems.then((res) => {
      setItems(res);
    });
  }, []);

  // el contenedor llama al componente presentacion ItemList
  return <ItemList items={items} />;

   //return (
   //    <div>
   //        {productos.map(p => <Item key={p.id} id={p.id} nombre={p.nombre} precio={p.precio} imagen={p.imagen} stock={p.stock}/>)}
   //    </div>
   //)
}

export default ItemListContainer
