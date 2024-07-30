import React from 'react';
import Header from './components/Header';
import Category from './components/Category';
import Banner from './components/Banner';
import FlashSale from './components/FlashSale';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Category />
      <FlashSale />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
