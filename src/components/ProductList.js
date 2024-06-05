import React from 'react';
import { Link } from 'react-router-dom';



function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <p className="product-category">{product.category}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


