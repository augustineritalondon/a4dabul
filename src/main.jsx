import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './state/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <Router>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <ToastContainer />
          <App />
        </PersistGate>
      </React.StrictMode>
    </Router>
  </Provider>
)
