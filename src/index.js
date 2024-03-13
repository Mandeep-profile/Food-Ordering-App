import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestroCard from './Components/Restaurants/RestroCard';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';

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
      },
      {
        path: '/restaurants/:resId',
        element: <Menu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
