import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import HomePage from './pages/Home';

import './App.css';
import AboutPage from './pages/About';
import ProductPage from './pages/Products';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <NavLink className='content' exact to='/'>
            Home
          </NavLink>
          <NavLink className='content' to='/about'>
            About
          </NavLink>
          <NavLink className='content' to='/products'>
            Products
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
        </Routes>
      </Router>
      {/* <h3>Hello World!!</h3>
      <button onClick={signOut}>Logout</button> */}
    </div>
  );
}

export default App;
