import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import db from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

const CartForm = () => {

    const {listaProductos, getTotalPrecio}= useContext(CartContext);
    const [userData, setUserData] = useState({ name: "Nombre", phone: "47476363", mail: "ejemplo@mail.com", address: "here"});

    const updatePerson = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        console.log("cambio");
    };

    const buyHandler = async () => {
        const order = {
            buyer: userData,
            date: "",
            items: listaProductos,
            total: getTotalPrecio()
        };
        const docRef = await addDoc(collection(db, "orders"), order);
    };

  return (
    <Form className="container mt-5 px-5">
        <div className="mb-4 align-left">
          <h3>Confirmar orden y pago</h3> <span>Por favor ingrese sus datos.</span>
        </div>
        <div className="row contenedor-formulario">
            <div className="col-md-8">
                <div className="p-3">
                    <h5 className="text-uppercase">Detalles de pago</h5>
                    <div className="inputbox mt-3">
                        <input value={userData.name} onChange={updatePerson} type="text" name="name" className="form-control" required="required"/>
                        <span>Nombre</span> 
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inputbox mt-3 mr-2"> <input value={userData.mail} onChange={updatePerson} type="text" name="mail" className="form-control" required="required"/><span>E-Mail</span></div>
                      </div>
                      <div className="col-md-6">
                        <div className="inputbox mt-3 mr-2"> <input value={userData.phone} onChange={updatePerson} type="text" name="phone" className="form-control" required="required"/><span>Telefono</span></div>
                      </div>
                    </div>
                    <div className="inputbox mt-3 mr-2"> <input value={userData.address} onChange={updatePerson} type="text" name="address" className="form-control" required="required"/><span>Calle y numero</span></div>
                </div>
                <div className="mt-4 mb-4 d-flex justify-content-between">
                <Link to={`/`} onClick={buyHandler}><Button className="btn btn-success px-5">Terminar Compra</Button></Link>
                </div>
            </div>
        </div>
    </Form>
  );
};

export default CartForm;
