import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage';
import OutletComponent from './OutletComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletComponent/>}>
        <Route path="/" element={<App/>} />
        <Route path="/all-posts" element={<BlogPage/>} />
          <Route path="/all-posts/:id" element={<BlogPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
