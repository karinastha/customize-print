// import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product2 from "./components/Product/Product2";

import {
  BrowserRouter as
    Switch,
  Route,
} from "react-router-dom";
// import { Tshirt } from "./components/Custom/Tshirt";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/header' exact component={Header} />

        <Route path='/home' component={Home} />

        <Route path='/about' component={About} />

        <Route path='/product2' exact component={Product2} />

      </Switch>
      <Header />
      <Home />
      {/* <Tshirt /> */}
    </div>
  );
}

export default App;
