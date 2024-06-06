import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './tailwind.css';  // Ensure this is imported after other CSS files

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
