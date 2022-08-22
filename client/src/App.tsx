import React from "react";
import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
  ]);

  useEffect(() => {
    fetch('http://localhost:7000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...products, 
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }
  return (
    <div>
      <h1>Little Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
