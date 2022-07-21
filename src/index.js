import React from 'react';
import {createRoot} from 'react-dom/client';

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react' 

import { persistor } from './store/index';


import './index.css';
import App from './App';

import {store} from './store/index'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
