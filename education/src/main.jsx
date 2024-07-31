import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreDataProvider from './Context-API/StoreContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreDataProvider>



)
