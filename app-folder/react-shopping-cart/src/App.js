import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App({ title, cartEventHandler, sexButtonHandler }) {
  // Since my app is using routing, my cart needs to be in a non-changing place(?) i.e. nav bar.

  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <h1>{title}</h1>
        <nav id="nav-bar">
          {/* Link component can only go in <nav> */}
          <Link to='homepage'> 
            <button>Home</button> 
          </Link> {' '}

          <Link to='mens' > 
            <button onClick={sexButtonHandler} data-testid='mens' type='button'>Men's</button> 
          </Link> {' '}

          <Link to='womens' > 
            <button onClick={sexButtonHandler} data-testid='womens' type='button'>Women's</button> 
          </Link> {' '}

          <Link to='shopping-cart'>
            <button onClick={cartEventHandler} data-testid='shopping-cart-page' id="cart-button">Cart</button>
          </Link> 
        </nav>
{/* Cart Button will also be a route, clicking it will take the user to a page that shows the purchased items, price, etc. */}
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
