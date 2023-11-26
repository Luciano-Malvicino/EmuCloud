import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FileProvider } from './components/FileContext/FileContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <FileProvider>
        <App />
      </FileProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
