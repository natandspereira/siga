import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/i18n.js'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
