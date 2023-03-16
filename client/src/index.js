import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Board from './services/Board';
import Game from './services/Game';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

