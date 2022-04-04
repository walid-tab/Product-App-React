import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './Components/ProductsList';
import { ProductsData } from './Data';

function App() {
  return (
    <div className="App"> 
      <ProductsList ProductsData={ProductsData}/>
    </div>
  );
}

export default App;
