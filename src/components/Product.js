import React from 'react';
import { Link } from 'react-router-dom';


class Product extends React.Component {
  render() {
    const { image, name, price, category, id } = this.props;
    return (
      <div className="product">
        <img src={image} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-price">${price}</p>
          <p className="product-category">{category}</p>
          <Link to={`/product/${id}`}>View Details</Link>
        </div>
      </div>
    );
  }
}

export default Product;

