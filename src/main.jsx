import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//style
import './index.css'

//component
import App from './App.jsx'
import Owner from './Owner.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/owner',
    element: <Owner />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
    <Owner />
  </RouterProvider>
)
