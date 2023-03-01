// import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product2 from "./components/Product/Product2";
import { Tshirt } from "./components/Custom/Tshirt";


import {
  BrowserRouter as
    Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/header" component={Header} />

        <Route path='/home' component={Home} />

        <Route path='/about' component={About} />

        <Route exact path='/product2' component={Product2} />

      </Switch>
      <Header />
      {/* <Home /> */}
      {/* <Product2 /> */}
      <Tshirt />
    </div>
  );
}

export default App;
