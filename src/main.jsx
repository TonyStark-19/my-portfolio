// import strict mode
import { StrictMode } from 'react';

// import create root
import { createRoot } from 'react-dom/client';

// import browser router
import { BrowserRouter } from 'react-router-dom';

// import app 
import App from './App.jsx';

// import index.css
import './index.css';

// import vercel analytics
import { Analytics } from "@vercel/analytics/react";

// routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);