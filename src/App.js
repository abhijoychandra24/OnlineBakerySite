import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Footer from './Footer';
import About from './About';
import { auth } from './firebase';
import { useEffect } from 'react';
import {useStateValue} from './StateProvider';

function App() {
  const [{loggedinuser}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      if(userauth) {
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
  },[])

  console.log("loggedinuser ===>", loggedinuser);

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          {/* <Footer /> */}
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
