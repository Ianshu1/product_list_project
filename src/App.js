import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/search_input';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './css/main.css';
import './css/Product.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <Search setSearchQuery={setSearchQuery} />
            <ProductList products={filteredProducts} />
          </>} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


