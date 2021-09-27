import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/navbar';
import Footer from './components/footer';
import Transparenta from './pages/transparenta';
import Galerie from './pages/galerie';
import Noutati from './pages/noutati';
import Anunturi from './pages/anunturi';
import Noutate from './pages/noutate';
import Anunt from './pages/anunt';
import Conducere from './pages/conducere';



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/transparenta'>
          <Transparenta/>
        </Route>
        <Route path='/galerie'>
          <Galerie/>
        </Route>
        <Route path='/noutati'>
          <Noutati/>
        </Route>
        <Route path='/noutate/:id'>
          <Noutate/>
        </Route>
        <Route path='/anunt/:id'>
          <Anunt/>
        </Route>
        <Route path='/anunturi'>
          <Anunturi/>
        </Route>
        <Route path='/conducere'>
          <Conducere/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  )
}

export default App;
