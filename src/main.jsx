// Starts React and puts the app into <div id="root"> in index.html.
// You rarely need to change this file.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './themes/index.css';
import './styles/base.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
