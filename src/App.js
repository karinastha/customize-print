// import './App.css';
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Product2 from "./components/Product/Product2";
// import { Tshirt } from "./components/Custom/Tshirt";


import { Link, Routes, Route } from "react-router-dom";


const Home = () => <div>hOME</div>;
const About = () => <div>About</div>;

function App() {
  return (
    <div className="App">


      <Link to="home">Home</Link>
      <Link to="about">About</Link>

      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="about" component={About} />
      </Routes>
      {/* <Header /> */}

      {/* <Switch>
        <Route exact path='/' component={Home} /> */}
      {/* <Route path='/about' component={About} /> */}
      {/* <Route path='/about' component={Test} /> */}
      {/* <Route path='/product2' component={Product2} /> */}
      {/* <Route path='/product2' component={Dummy} />
      </Switch> */}
      {/* <Home /> */}
      {/* <Product2 /> */}
      {/* <Tshirt /> */}
    </div>
  );
}

export default App;
