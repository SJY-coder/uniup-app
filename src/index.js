import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppPage1 from './AppPage1';
import AppPage2 from './AppPage2';
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(<BrowserRouter> <Switch>
    <Route exact path="/" component={AppPage1} />
    <Route path="/start-up-start" component={AppPage2} />
  </Switch></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

