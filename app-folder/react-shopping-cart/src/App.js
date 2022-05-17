import './App.css';
import Homepage from './components/homepage/Homepage';
function App() {
  return (
    <div className="App" data-testid='App'>
      <header>
        <h1>Legendary Murim Shop</h1>
        <nav id="nav-bar">
          {/* These are going to be routes later on */}
          Homepage logo or name
          Product One {' '}
          Product Two {' '}
          Product Three {' '}
        </nav>
        <button id="cart-button">Cart Button</button>
      </header>

      <div className='app-child-container'>
        <Homepage />
      </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;
