import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Publication from './components/Publication';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/contact">
          <Contact />
        </Route> 
      <Route path="/publication">
          <Publication />
        </Route>       
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
