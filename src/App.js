// import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route path='/header' exact component={Header} />

          <Route path='/home' component={Home} />

          <Route path='/about' component={About} />
        </Switch>
      </Router> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
