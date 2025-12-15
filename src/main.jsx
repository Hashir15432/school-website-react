import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children : [
      {
        path : '',
        element : <App />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/about',
        element : <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
