import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import CreateUser from './CreateUser/CreateUser';
import Customers from './Customers/Customers';
import Transfer from './Transaction/Transfer';
import History from './History/history';
import About from './About/About';
import Services from './Services/services';
import Contact from './Contact/contact';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/history">
            <div className="rm">
              <Header />
            </div>
            <History />
            <div className="rm">
              <Footer />
            </div>
          </Route>
          <Route path="/transfer">
            <Header />
            <Transfer />
            <Footer />
          </Route>
          <Route path="/view">
            <div className="rm">
              <Header />
            </div>
            <Customers />
            <div className="rm">
              <Footer />
            </div>
          </Route>
          <Route path="/create">
            <Header />
            <CreateUser />
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
