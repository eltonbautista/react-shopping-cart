import './App.css';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import { Link, Outlet } from 'react-router-dom';

function App({ title, }) {
  // Since my app is using routing, my cart needs to be in a non-changing place(?) i.e. nav bar.
  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <h1>{title}</h1>
        <nav id="nav-bar">
          {/* Link component can only go in <nav> */}
          <Link to='homepage'><button>Home</button></Link>
          <Link to='product-category-zero' ><button type='button'>Product Page Zero</button></Link> {' '}
          <Link to='product-category-one' ><button type='button'>Product Page One</button></Link>{' '}
          <Link to='product-category-two' ><button type='button'>Product Page Two</button></Link>
        </nav>
        <button id="cart-button">Cart Button</button>
      </header>
      {/* The Outlet component is here because initially,
          if I did not use routing then all of my child components in links would be in that container */}
      <div className='app-child-container'>
        <Outlet />
      </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;
