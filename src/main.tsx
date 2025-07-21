import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// If local mount
if (document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(<App />);
}

// For remote use
export { App };
