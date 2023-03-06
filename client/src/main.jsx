import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import initialState from './context/InitialState'
import reducer from './context/reducer'
import { StateProvider } from './context/stateProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
    <BrowserRouter>
    <ToastContainer position='bottom-left'/>
      <App />
    </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
)
