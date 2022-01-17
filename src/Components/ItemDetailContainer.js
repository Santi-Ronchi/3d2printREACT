import React from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../data/stockData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [cargando, setCarga] = useState(true);
  
    const { itemId } = useParams();

    useEffect(() => {
      const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const myData = productos.find((item) => item.id === itemId);
            resolve(myData);
          }, 2000);
        });
      getItem.then((res) => {
        setItem(res);
      }).finally(() => setCarga(false));
    }, [itemId]);

    return cargando ? <h2 className="pantallaDeCarga">CARGANDO...</h2> : <ItemDetail {...item} />;}

export default ItemDetailContainer
