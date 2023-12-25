import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'

// React Router
import { BrowserRouter } from 'react-router-dom'

// Overlayscrollbars
import 'overlayscrollbars/overlayscrollbars.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
