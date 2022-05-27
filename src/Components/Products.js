import React, {useEffect, useState} from 'react';
import ProductInfo from './ProductInfo';

const Products = ({color, price, category}) => {
  useEffect(() =>{
    applyFilters();
  }, [color, price, category])
  const [product, setProduct] = useState(ProductInfo)
  const applyFilters = () =>{
    let product = ProductInfo

    if(color !== "all"){
      product = product.filter(prod => prod.color == color)
      console.log(product)
      

    }
    else if(color == "all"){
      product = ProductInfo
    }

    if(price == "lowhigh"){
      product = product.sort(function(a, b){
        return a.price - b.price
      })
      
    }
    else if(price == "highlow"){
      product = product.sort(function(a, b){
        return  b.price - a.price
      })
      
    }

    if(category !== "all"){
      product = product.filter(prod => prod.category == category)
      console.log(product)
    }
    else if(category == "all"){
      product = ProductInfo
    }
    setProduct([...product])
  }
  
  return (
    <div className='container'>
        <div className='row'>
          {product.map((prod)=>{            
            return (<>
            <div key={prod.id} class="card text-center m-2" style={{"width": "12rem"}}>
            <img src={prod.image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{prod.title}</h5>
              <p class="card-text">Rs. {prod.price}</p>
              <button class='btn btn-success'>Add to Cart</button>
            </div>
          </div>
          </>
              
            )
            
             } ) }
       
        
        </div>
    </div>
  )
}

export default Products