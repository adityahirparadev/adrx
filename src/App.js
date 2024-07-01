import './App.css';
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Career from './components/Career';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/portfolio" Component={Portfolio}/>
        <Route exact path="/workshop" Component={Workshop}/>
        <Route exact path="/contact-us" Component={Contact}/>
        <Route exact path="/career" Component={Career}/>
      </Routes>
    </>
  );
}

export default App;
