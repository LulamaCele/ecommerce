import React from "react";
//import react router dom
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Hero from './components/Hero';
// import CartItem from './components/CartItem';
// import Product from './components/Product';

const App = () => {
  return <Router>
      <div className="overflow-hidden">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <SideBar />
          <Footer />
        </Switch>
      </div>
    </Router>
  
};

export default App;
