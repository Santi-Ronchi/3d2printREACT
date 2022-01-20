import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from '../data/stockData';
import { useParams } from 'react-router-dom';
import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [cargando, setCarga] = useState(true);
  const { itemId } = useParams();

  useEffect( () => {
    const ref = doc(db, 'items', itemId)

    getDoc(ref)
    .then( querySnapshot => {
      setItem({...querySnapshot.data(), id: querySnapshot.id})
    })
    .catch(e => console.log(e))
    setCarga(false)
  }, [itemId]);

  
  return cargando ? <h2 className="pantallaDeCarga">CARGANDO...</h2> : <ItemDetail {...item} />;}


  export default ItemDetailContainer
