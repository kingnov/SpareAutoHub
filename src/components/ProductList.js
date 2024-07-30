import React from 'react';
import PayPalCheckoutButton from './PayPalButton';
import './ProductList.css';

const products = [
  {
    name: 'Brake Pads',
    price: '49.99',
    image: 'path_to_brake_pads_image.jpg',
  },
  {
    name: 'Oil Filter',
    price: '19.99',
    image: 'path_to_oil_filter_image.jpg',
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.name}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <PayPalCheckoutButton product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
