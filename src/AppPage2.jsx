import React from 'react'
import StartupStart from './StartupStart'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import StartupStartStudent from './StartupStartStudent'
import Timeline from './Timeline';

ReactDOM.render(<BrowserRouter> <Switch>
    <Route exact path="/start-up-start" component={StartupStart} />
    <Route path="/start-up-start/student" component={StartupStartStudent} />
  </Switch></BrowserRouter>, document.getElementById('root'));

function AppPage2() {
    return ReactDOM.render(<BrowserRouter> <Switch>
        <Route exact path="/start-up-start" component={StartupStart} />
        <Route path="/start-up-start/student" component={StartupStartStudent} />
        <Route path="/start-up-start/timeline" component={Timeline} />
      </Switch></BrowserRouter>, document.getElementById('root'));
}

export default AppPage2
