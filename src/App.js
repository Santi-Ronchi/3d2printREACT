import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import CartContextProvider from './context/CartContext';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import SobreNosotros from './Components/SobreNosotros';
import './estructura.scss';



function App() {
  
  return (
    <CartContextProvider>
        <div className="body">
          <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
              <Route path="/category/:catId" element={<ItemListContainer greeting={'FILTRADO'} />}/>
              <Route path="/product/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/sobrenosotros" element={<SobreNosotros/>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
            <br></br>
            <br></br>
          </div>
        </div>
    </CartContextProvider>
    
  );
}

export default App;