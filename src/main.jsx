import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Root } from './routes/root.jsx';
import { AboutUs } from './routes/aboutUs.jsx';
import { Volunteer } from './routes/volunteer.jsx';
import { OurWork } from './routes/ourWork.jsx';
import { Education } from './routes/education.jsx';
import { Community } from './routes/community.jsx';
import { Family } from './routes/family.jsx';
import { GetInvolved } from './routes/getInvolved.jsx';
import { FAQ } from './routes/faq.jsx';


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
    path: "/volunteer",
    element: <Volunteer />
  },
  {
    path: "/our-work",
    element: <OurWork />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/family",
    element: <Family />
  },
  {
    path: "/get-involved",
    element: <GetInvolved />
  },
  {
    path: "/faq",
    element: <FAQ />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
