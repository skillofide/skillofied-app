import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { CourseHeaderProvider } from './context/CourseHeaderContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <CourseHeaderProvider>
          <App />
        </CourseHeaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
