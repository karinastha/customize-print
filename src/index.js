import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
// import Context from './context/Context';
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Product2 from "./components/Product/Product2";
import CartProvider from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        {/* <Switch>
        <Route path="/" component={App} />
        <Route path='/header' exact component={Header} />

        <Route path='/home' component={Home} />

        <Route path='/about' component={About} />

        <Route path='/product2' component={Product2} />

      </Switch> */}

        <App />

      </Router>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
