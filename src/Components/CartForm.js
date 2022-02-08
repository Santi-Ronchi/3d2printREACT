import { Form, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import db from '../firebase/firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';

const CartForm = () => {

    const {clearCart} = useContext(CartContext);
    const [idCompra, setID] = useState("");
    const [compraTerminada, setTerminado] = useState(false);
    const {listaProductos, getTotalPrecio}= useContext(CartContext);
    const [userData, setUserData] = useState({ name: "", phone: "", mail: "", confirmMail: "", address: ""});
    let mensajeAlerta = "";


    const actualizarStock = () => {
      listaProductos.forEach(element => {
        const itemDoc = doc(db, "items", element.id);
        updateDoc(itemDoc, {stock: (element.stock - element.cantidad)})
      });
    }

    const updatePerson = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const dataCorrecta = () => {
      if(userData.name === "" || userData.phone === "" || userData.mail === "" || userData.address === "" || isNaN(userData.phone)){
        mensajeAlerta = "Los datos ingresados no son correctos";
        return false;
      }else if( userData.mail === userData.confirmMail){
        return true;
      }else{
        mensajeAlerta = "Los campos de Email no coinciden";
        return false;
      }
    }

    const buyHandler = async () => {
      if (dataCorrecta() === true){
        const order = {
          buyer: userData,
          date: "",
          items: listaProductos,
          total: getTotalPrecio()
      };

      actualizarStock();
      const docRef = await addDoc(collection(db, "orders"), order);
      setID(docRef.id);
      setTerminado(true)

      }else{ alert(mensajeAlerta)}
        
    };

  return (
    <div>
      {!compraTerminada && 
        <Form className="container mt-5 px-5">
          <div className="mb-4 align-left">
            <h3>Confirmar orden y pago</h3> <span>Por favor ingrese sus datos.</span>
          </div>
          <div className="row contenedor-formulario">
              <div className="col-md-8">
                  <div className="p-3">
                      <h5 className="text-uppercase">Detalles de pago</h5>
                      <div className="inputbox mt-3">
                          <input value={userData.name} onChange={updatePerson} type="text" name="name" className="form-control" required="required" placeholder="Juan Ejemplez"/>
                          <span>Nombre</span> 
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="inputbox mt-3 mr-2"> <input value={userData.mail} onChange={updatePerson} type="email" name="mail" className="form-control" required="required" placeholder="email@ejemplo.com"/><span>E-Mail</span></div>
                        </div>
                        <div className="col-md-6">
                          <div className="inputbox mt-3 mr-2"> <input value={userData.confirmMail} onChange={updatePerson} type="email" name="confirmMail" className="form-control" required="required" placeholder="email@ejemplo.com"/><span>Confirmar E-Mail</span></div>
                        </div>
                        <div className="col-md-6">
                          <div className="inputbox mt-3 mr-2"> <input value={userData.phone} onChange={updatePerson} type="text" name="phone" className="form-control" required="required" placeholder="1123232323"/><span>Telefono</span></div>
                        </div>
                      </div>
                      <div className="inputbox mt-3 mr-2"> <input value={userData.address} onChange={updatePerson} type="text" name="address" className="form-control" required="required"placeholder="Av Cabildo 2700"/><span>Calle y numero</span></div>
                  </div>
                  <div className="mt-4 mb-4 d-flex justify-content-between">
                  <Button className="btn btn-success px-5" onClick={buyHandler}>Comprar</Button>
                  <Button className="btn btn-warning px-5" onClick={clearCart}>Cancelar Compra</Button>  
                  </div>
              </div>
          </div>
        </Form>
      }{compraTerminada  &&

        <div className= "detail-outside">
          <br/>
          <h3>Listo!</h3>
          <h4>Gracias por tu compra, tu id de pedido es:</h4>
          <h4>{idCompra}</h4>

          <Link to={`/`}><Button variant="outline-primary">Volver al Inicio</Button></Link>
        </div>
      }
    </div>
  );
};

export default CartForm;
