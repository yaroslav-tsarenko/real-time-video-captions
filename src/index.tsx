import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VideoCaptions from "./components/video-captions-2/VideoCaptions";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <VideoCaptions />
  </React.StrictMode>
);


reportWebVitals();
