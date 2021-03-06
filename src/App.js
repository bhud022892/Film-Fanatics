import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Footer } from './components/Footer'
// import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Watchlist />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
          <Route path='/watched'>
            <Watched />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;