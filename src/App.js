import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import SideBar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

// import Hero from './components/Hero';
// import CartItem from './components/CartItem';
// import Product from './components/Product';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <SideBar />
      <Footer />
    </Router>
  </div>;
};

export default App;
