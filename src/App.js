import React, { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { fetchApiData } from "./feature/cartSlice";


import { Box } from '@mui/material';

import Header from './components/header/Header';

import Home from './components/home/Home';
import Cart from './components/cart/Cart'
import DetailView from './components/details/DetailView';
import Shipping from "./components/shipping/Shipping";
// import Context from "./context/Context";
// import allProductData from "./data/allProductData";


//=======================================function starts=======================================
function App() {

  // const items = useSelector((state) => state.allCart.item);
  // const first = items[0];

  // const [itemData, setItemData] = useState([]);
  
  // useEffect(() => {
  //   // setItemData(items[3]);
  //   console.log(first)
  //   if (localStorage.getItem("shoppingCart") === null) {
  //     localStorage.setItem("shoppingCart", first);
  //   }
  // }, []);

  return (
      
        <Router>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shipping' element={<Shipping />} />
            </Routes>
          </Box>
        </Router>
      

  );
}

export default App;
// export { apiProductData };
