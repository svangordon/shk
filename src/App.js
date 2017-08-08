import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './containers/Home';
import PageHeader from './containers/PageHeader';
import './App.css';

const App = () =>
  <div>
    <PageHeader />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>;

export default App;
