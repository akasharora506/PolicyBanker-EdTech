import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Module from './components/Module';
import { TITLES, SUBTITLES, PAGE_ICON } from './constant';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home title={TITLES['home']} subTitle={SUBTITLES['home']} displayIcon={PAGE_ICON['home']} />
          </Route>
          <Route exact path="/general">
            <Module title={TITLES['general']} subTitle={SUBTITLES['general']} displayIcon={PAGE_ICON['general']} />
          </Route>
          <Route exact path="/life">
            <Module title={TITLES['life']} subTitle={SUBTITLES['life']} displayIcon={PAGE_ICON['life']} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
