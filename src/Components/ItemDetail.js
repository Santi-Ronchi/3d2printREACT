import React from 'react'

const ItemDetail = ({nombre, precio, imagen, id, stock, descripcion}) => {
    return (
        <div className="detail-row">
          <br></br>
          <img src={imagen} alt={`${id}-${nombre}`} className="flex-col bordesRedondeados" />
          <section className="flex-col">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <h2>${precio}</h2>
          </section>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        
    )
}

export default ItemDetail

