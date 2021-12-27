import React from 'react'

const ItemDetail = ({nombre, precio, imagen, id, stock, descripcion}) => {
    return (
        <div className="detail-outside flex-box">
            <div className="detail-row">
              <img src={imagen} alt={`${id}-${nombre}`} className=" bordesRedondeados" />
              <section className="">
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h2>${precio}</h2>
              </section>
            </div>
        </div>
        
    )
}

export default ItemDetail

