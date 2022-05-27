import './App.css';
import Filters from './Components/Filters';
import Sort from './Components/Sort';
import Category from './Components/Category';
import Products from './Components/Products';
import {useState} from 'react';

function App() {
  const [color, setColor] = useState("all");
  const [price, setPrice] = useState("lowhigh");
  const [category, setCategory] = useState("all")
  
  return (
    <>
      <h1 className='text-center'>Welcome</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
          <h1>Filters</h1>
            <Category category= {category} setCategory={setCategory}/>
            <Filters color={color} setColor={setColor}/>
            <Sort price={price} setPrice={setPrice}/>
            
          </div>
          <div className="col-md-9">
            <h1>Products</h1>
            <Products color={color} price={price} category={category}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
