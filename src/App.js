/*import logo from './logo.svg';
import './App.css';

function App() {
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
      </header>
    </div>
  );
}

export default App;*/

/*import {Headers} from './components/Headers';
import {ProductList} from './components/ProductList';

function App() {
  return (
    <>
     <Headers></Headers>
     <ProductList></ProductList>
    </>
  );
}

export default App;
*/

import { useState } from 'react';
import { Header } from './components/Headers';
import { ProductList } from './components/ProductList';

function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  
  return (
    <>
      <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />
    <ProductList
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
    />
  </>
  );
}

export default App;  