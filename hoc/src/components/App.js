import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Header from './Header';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={CommentList} />
        <Route path="/post" exact component={CommentBox} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </Router>
);

export default App;
