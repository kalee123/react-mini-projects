import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RecipeDetail from './RecipeDetail';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

window.onbeforeunload = function() {
  localStorage.clear();
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/react-mini-projects/recipe-app/" component={App} />
        <Route exact path="/react-mini-projects/recipe-app/recipe/:id" component={RecipeDetail} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
