import React from 'react'
import Item from './Item';

function ItemListContainer() {
    
    const productos = [
    {
        nombre: "Maceta",
        precio: "500",
        imagen: "../media/maceta3d43.jpg",
        id: "1",
        stock: "100"
    },
    {
        nombre: "Pokemon",
        precio: "200",
        imagen: "../media/poke.jpg",
        id: "2",
        stock: "100"
    },
    {
        nombre: "JoyConHolder",
        precio: "1200",
        imagen: "../media/JoyConHolderFront.jpg",
        id: "3",
        stock: "100"
    },
    {
        nombre: "Lapicero",
        precio: "250",
        imagen: "../media/LapiceroLleno.jpg",
        id: "4",
        stock: "100"
    },
    {
        nombre: "Escurre dentifrico",
        precio: "100",
        imagen: "../media/escurreDentifrico.jpg",
        id: "5",
        stock: "100"
    },
    {
        nombre: "Porta control remoto",
        precio: "800",
        imagen: "../media/PortaControles.jpg",
        id: "6",
        stock: "100"
    },
    {
        nombre: "Auto antiguo",
        precio: "350",
        imagen: "../media/autoJuguete.jpg",
        id: "7",
        stock: "100"
    },
    {
        nombre: "Anti anteojos nublados",
        precio: "120",
        imagen: "../media/antiNiebla.jpg",
        id: "8",
        stock: "100"
    },
    {
        nombre: "Caja .22",
        precio: "1500",
        imagen: "../media/balas22CaseFull.jpg",
        id: "9",
        stock: "100"
    }];

    return (
        <div>
            {productos.map(p => <Item nombre={p.nombre} precio={p.precio} imagen={p.imagen} id={p.id} stock={p.stock}/>)}
        </div>
    )
}

export default ItemListContainer
