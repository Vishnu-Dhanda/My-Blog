import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage';
import OutletComponent from './OutletComponent';
import ProjectPage from './ProjectPage';
import AllPosts from './AllPosts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletComponent/>}>
        <Route path="/" element={<App/>} />
        <Route path="/all-posts" element={<AllPosts/>} />
          <Route path="/all-posts/:id" element={<BlogPage/>} />
          <Route path="/projects/:id" element={<ProjectPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
