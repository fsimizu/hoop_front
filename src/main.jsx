import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AboutUs } from './routes/aboutUs.jsx';
import { JoinUs } from './routes/joinUs.jsx';
import { OurWork } from './routes/ourWork.jsx';
import { Root } from './routes/root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/our-work",
    element: <OurWork />
  },
  {
    path: "/join-us",
    element: <JoinUs />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
