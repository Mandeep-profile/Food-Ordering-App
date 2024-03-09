import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestroCard from './Components/Restaurants/RestroCard';
import About from './Components/About/About';

const appRouter = createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RestroCard />
      },
      {
        path: '/home',
        element: <RestroCard />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = {appRouter} />
);
