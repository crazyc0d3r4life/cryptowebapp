import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./assets/sass/main.scss";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <h1>Hello from Promise</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla esse facilis, ex, explicabo eaque porro iure quod placeat et, exercitationem rerum sapiente illo! Unde reiciendis dolore consequuntur obcaecati veniam.</p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
