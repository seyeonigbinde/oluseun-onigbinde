import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
