import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import db from '../firebase/firebase';
import { collection, getDocs, query, where} from 'firebase/firestore';


export const ItemListContainer = ({ greeting }) => {
  
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect( async () => {
    setLoading(true);
    const myProducts = catId ?
      query(collection(db, "items"), where("categoria", "==", catId ))
      :
      collection(db, "items");

      try {
        const querySnapshot = await getDocs(myProducts)
        setItems(querySnapshot.docs.map(p => {
          return { ...p.data(), id: p.id }
        }))
      }
      catch {
        console.log("Error in the application")
      }

      setLoading(false)

  }, [catId]);

  return loading ? (
    <h2 className="pantallaDeCarga">CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>

  )}

export default ItemListContainer