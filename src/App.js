import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar'
import './estructura.scss'


function App() {
  return (
    <div className="body">
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
      </div>
    </div>
    
  );
}

export default App;