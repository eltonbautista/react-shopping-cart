import './App.css';
import { Link, Outlet } from 'react-router-dom';
import cartLogo from './assets/shopping-bag-svgrepo-com.svg'

function App({ title, cartEventHandler, cartLength }) {
  // Since my app is using routing, my cart needs to be in a non-changing place(?) i.e. nav bar.
  const cartIcon = <img src={cartLogo} alt='cart'></img> 

  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <Link to='/'> 
          <h1>{title}</h1> 
        </Link> {' '}
        
        <nav id="nav-bar">
          {/* Link component can only go in <nav> */}
          <Link to='/'> 
            <button>Home</button> 
          </Link> {' '}

          <Link to='mens' > 
            <button data-testid='mens' type='button'>Men's</button> 
          </Link> {' '}

          <Link to='womens' > 
            <button data-testid='womens' type='button'>Women's</button> 
          </Link> {' '}

          <Link to='shopping-cart'>
            <button onClick={cartEventHandler} data-testid='shopping-cart-page' id="cart-button">
              <div>{cartIcon}</div>
              <span>{cartLength}</span>
            </button>
          </Link> 
        </nav>
{/* Cart Button will also be a route, clicking it will take the user to a page that shows the purchased items, price, etc. */}
      </header>
      
      {/* The Outlet component is here because initially,
          if I did not use routing then all of my child components in links would be in that container */}
      <div className='app-child-container'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
