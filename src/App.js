import './App.css';
import Header from "./components/Header/Navhead";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Product2 from "./components/Product/Product2";
import {Tshirt} from "./components/Custom/Tshirt";
import Checkout from "./components/Checkout/Checkout";
// import Checkout from "./components/Checkout/";
import { Routes, Route } from "react-router-dom";


// const Home = () => <div>hOME</div>;
// const About = () => <div>About</div>;

function App() {
  return (
    <div className="App">

      {/* 
      <Link to="home">Home</Link>
      <Link to="about">About</Link> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/product2' element={<Product2 />} />
        <Route path='/tshirt' element={<Tshirt />} />
        <Route path='/cart' element={<Checkout />} />
        

      </Routes>
      {/* <Home /> */}
      {/* <Product2 /> */}
      {/* <Tshirt /> */}
    </div>
  );
}

export default App;
