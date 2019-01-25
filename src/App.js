import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Grid, Row} from 'react-bootstrap';

//import main component
import NavigationBar from './component/NavigationBar.component';

//import component route
import Dashboard from './containers/Dashboard/Dashboard.container';
import About from './containers/About/About.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Grid>
          <Row>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
          </Switch>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
