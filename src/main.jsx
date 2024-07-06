import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Business from './Componets/Business/Business.jsx'
import Technology from './Componets/Technology/Technology.jsx'
import Sports from './Componets/Sports/Sports.jsx'  
import Science from './Componets/Science/Science.jsx'
import Health from './Componets/Health/Health.jsx'
import Entertainment from './Componets/Entertainment/Entertainment.jsx'
import World from './Componets/World/World.jsx'
import { NewsContextProvider } from './Context/NewsContextProvider.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<World/>
      },{
        path:"world",
        element:<World/>
      },
      {
        path:"business",
        element:<Business/>
      },
      {
        path:"technology",
        element:<Technology/>
      },
      {
        path:"sports",
        element:<Sports/>
      },
      {
        path:"science",
        element:<Science/>
      },
      {
        path:"health",
        element:<Health/>
      },
      {
        path:"entertainment",
        element:<Entertainment/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContextProvider>
    <RouterProvider router={router}/>
    </NewsContextProvider>
  </React.StrictMode>,
)
