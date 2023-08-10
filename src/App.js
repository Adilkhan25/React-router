
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Support from './components/Support';
import PageNotFound from './components/PageNotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className='container'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
         <Routes>
          <Route path='/' element = {<MainHeader/>}>
              <Route index element = {<Home/>} />
              <Route path='/about' element = {<About/>}/>n
              <Route path='/labs' element={<Labs/>}/>
              <Route path='/support' element = {<Support/>} />
              <Route path='*' element = {<PageNotFound/>}/>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
