import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar'
import './estructura.scss'


function App() {
  return (
    <body className="body">
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
      </div>
    </body>
    
  );
}

export default App;