import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';
import Recipe from "../src/pages/Recipe/Recipe";
import FilteredRecipes from "../src/pages/FilteredRecipes/FilteredRecipes";
import Openapi from "../src/pages/Openapi/Openapi";


function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/recipes/:id' exact component={Recipe} />
        <Route path='/recipes/' exact component={FilteredRecipes} />
        <Route path='/openapi/' exact component={Openapi} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
