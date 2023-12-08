import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import {PersistGate} from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const root = createRoot(document.getElementById('root'));
const basename = '/react-homework-template';
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
