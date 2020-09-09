import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import signin from './components/auth/signin';

const img = require('./foodimage.jpg');
const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
};

function App() {
  return (
    <div style={divStyle}>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/signin' component={signin} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

/*{<Route path="/about" component={About} />
  <Route component={NoMatch} />
}*/

export default App;
