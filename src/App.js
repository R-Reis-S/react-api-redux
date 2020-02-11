import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductsCart from './pages/productsCart/index';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ProductsCart />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
