import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import PlayerPage from '../list/PlayerPage';
import PlayerDetail from '../detail/PlayerDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,

} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>
           
            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/players" exact={true}
                render={routerProps => (
                  <PlayerPage {...routerProps}/>
                )}
              />

              <Route path="/players/:id"
                render={routerProps => (
                  <PlayerDetail {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
