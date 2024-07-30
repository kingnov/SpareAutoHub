import React from 'react';
import './Category.css';

const categories = [
  { name: 'Sedan', icon: '🚗', image: 'path_to_sedan_image.jpg' },
  { name: 'SUV', icon: '🚙', image: 'path_to_suv_image.jpg' },
  { name: 'Truck', icon: '🚚', image: 'path_to_truck_image.jpg' },
  { name: 'Motorcycle', icon: '🏍️', image: 'path_to_motorcycle_image.jpg' },
  // Add more car models as needed
];

const Category = () => {
  return (
    <div className="categories">
      {categories.map(category => (
        <div className="category" key={category.name}>
          <img src={category.image} alt={category.name} className="category-image" />
          <span className="icon">{category.icon}</span>
          <span className="name">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Category;
