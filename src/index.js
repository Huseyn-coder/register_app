import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Register from './Pages/Register';
import MelumatlarContext from './Context/MelumatlarContext';
import AnaSehife from './Pages/AnaSehife';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/anasehife",
        element: <AnaSehife />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MelumatlarContext>
    <RouterProvider  router={router}/>
    </MelumatlarContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
