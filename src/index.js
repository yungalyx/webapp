import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { initStars } from './components/Stars.js'
// Render our main app into the 'root' node defined in `index.html`
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  initStars()
)
