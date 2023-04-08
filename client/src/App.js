import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"> <Home type="general" /> </Route>
        <Route path="/business"> <Home type="business" /> </Route>
        <Route path="/entertainment"> <Home type="entertainment" /> </Route>
        <Route path="/health"> <Home type="health" /> </Route>
        <Route path="/science"> <Home type="science" /> </Route>
        <Route path="/sports"> <Home type="sports" /> </Route>
        <Route path="/technology"> <Home type="technology" /> </Route>=
      </Switch>
    </Router>
  )
}

export default App