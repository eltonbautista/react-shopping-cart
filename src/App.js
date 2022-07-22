import './App.css';
import { Link, Outlet } from 'react-router-dom';
import cartLogo from './assets/shopping-bag-svgrepo-com.svg';

function App({ title, cartEventHandler, cartLength }) {
  const cartIcon = <img src={cartLogo} alt='cart'></img>;

  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <Link to='/'>
          <h1>{title}</h1>
        </Link> {' '}

        <nav id="nav-bar">
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
      </header>
      <div className='app-child-container'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
