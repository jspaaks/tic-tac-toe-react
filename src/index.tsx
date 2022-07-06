import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from 'game'

const app = document.getElementById("app");
if (app !== null) {
    const root = ReactDOM.createRoot(app);
    root.render(<Game />);
}
