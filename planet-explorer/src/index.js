import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ---------------- Dynamic CSP Injection ----------------
// src/index.js
const cspMeta = document.getElementById('csp-meta');

if (cspMeta) {
  if (process.env.NODE_ENV === 'development') {
    // Development CSP
    cspMeta.setAttribute(
      'content',
      `
        default-src 'self' http://localhost:3000;
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline';
        img-src * data:;
        connect-src 'self' https://anurella.github.io ws://localhost:3000;
        font-src 'self';
        object-src 'none';
        frame-src 'none';
        base-uri 'self';
      `
    );
  } else {
    // Production CSP
  // Production CSP (strict but allows API images)
cspMeta.setAttribute(
  'content',
  `
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' data: https://anurella.github.io https://raw.githubusercontent.com;
    connect-src 'self' https://anurella.github.io;
    font-src 'self';
    object-src 'none';
    frame-src 'none';
    base-uri 'self';
  `
);
  }
}
// -------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

