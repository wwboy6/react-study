import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './fetchDataStore';

function App() {
  // Note: the store instance is defined in parent component: index.js
  const dispatch = useDispatch();
  const state = useSelector(state => state.fetchData.state);

  async function handleClick() {
    dispatch(fetchData());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{state}</p>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
