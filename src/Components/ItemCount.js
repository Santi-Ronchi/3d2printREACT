import React from 'react';
import { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(parseInt(initial))
    
    const clickPositivo = () => {
        if(cantidad < stock) {
            setCantidad( cantidad + 1)
        }  else {alert(`El stock dispone de ${stock} unidades`)}
    }
    
    const clickNegativo = () => {
        if(cantidad > 1) {
            setCantidad( cantidad - 1)
        }
    }

    return (
        <>
          <InputGroup className="mb-2">
            <Button variant="outline-secondary" title="-" id="segmented-button-dropdown-1"
                onClick={clickNegativo}
                >-</Button>
            <FormControl type="number" aria-label="Text input with dropdown button" value={cantidad} readOnly></FormControl>
            <Button variant="outline-secondary" title="+" id="segmented-button-dropdown-1"
                onClick={clickPositivo}
                >+</Button>
          </InputGroup>
          <Button variant="outline-primary" title="alCarro" onClick={() => {onAdd(cantidad)}}>Agregar</Button>
          
        </>
    )
}

export default ItemCount
