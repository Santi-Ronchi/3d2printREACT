import React from 'react'
import ItemList from './ItemList';
import { productos } from '../data/stockData'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  /* para ponerle un loader */
  const [loading, setLoading] = useState(true);


  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? productos.filter((item) => item.categoria === catId)
          : productos;

        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {setItems(res);}).finally(() => setLoading(false));}, [catId]);

  return loading ? (
    <h2 className="pantallaDeCarga">CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>

  )}

export default ItemListContainer
