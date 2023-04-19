import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProjectProvider } from './context/MainContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectProvider>
  </React.StrictMode>,
)
