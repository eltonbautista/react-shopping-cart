import './App.css';
import Homepage from './components/homepage/Homepage';
import ProductPage from './components/product-components/ProductPage';
import { Link, Outlet } from 'react-router-dom';

function App({ title, }) {

  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <h1>{title}</h1>
        <nav id="nav-bar">
          {/* These are going to be routes later on */}
          <Link to='homepage'><button>Home</button></Link>
          <Link to='product-category-zero' ><button type='button'>Product Page Zero</button></Link> {' '}
          <Link to='product-category-one' ><button type='button'>Product Page One</button></Link>{' '}
          <Link to='product-category-two' ><button type='button'>Product Page Two</button></Link>
        </nav>
        <button id="cart-button">Cart Button</button>
      </header>

      <div className='app-child-container'>
        <Outlet />
        {/* <Homepage />
        <ProductPage /> */}
      </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;
