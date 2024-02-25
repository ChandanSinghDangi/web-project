import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import PostList from './Components/PostList';
import CreatePost from './Components/CreatePost';
import Home from './Components/Home';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/blogs',
        element:<PostList></PostList>
      },
      {
        path:'/createPost',
        element:<CreatePost></CreatePost>
      },
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
