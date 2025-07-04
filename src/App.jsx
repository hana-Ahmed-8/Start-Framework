import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Error from './components/Error/Error';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter
    ([
      {
        path: '/', element: <Layout />,
        children: [{  path: '/', element: <Welcome />},
          {path: '/about', element: <About /> }
          , { path: '/contact', element: <Contact /> }
          , { path: '/portfolio', element: <Portfolio /> }, {
          path: '*', element: <Error />
        }
        ]
      }

    ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
