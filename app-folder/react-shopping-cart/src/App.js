import './App.css';
import Homepage from './components/homepage/Homepage';
function App({ title, }) {

  return (
    <div className="App" id='app' data-testid='App'>
      <header>
        <h1>{title}</h1>
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
