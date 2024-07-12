import React from 'react'
import {createBrowserRouter , RouterProvider , Navigate, BrowserRouter } from 'react-router-dom';
import HomePage from './Components/Home';
import AboutPage from './Components/About';
import ContactPage from './Components/Contact';
import ErrorPage from './Components/Error';
import Navbar from './Components/Navbar';
import PostPage from './Components/Post';
import DashboardPage from './Components/Dashboard';
import LoginPage from './Components/Login';
import LogoutPage from './Components/Logout';

const isLoggedIn = true;
const data = {
  userid:"_yashu_016",
  pass:"idk"
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <h1 className='mt-4 text-center text-2xl font-bold'> React Router V6 Is Here </h1>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/home",
    element:<HomePage/>
  },
  {
    path:"/contact",
    element:<ContactPage/>
  },
  {
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/dashboard",
    element: isLoggedIn ? <DashboardPage/> : <Navigate to="/login" replace={true} state={data}/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/logout",
    element:<LogoutPage/>
  },
  {
    path:"/post/:category",
    element:<PostPage/>
  },
  {
    path:"/post/:category/:id",
    element:<PostPage/>
  },
  // {
  //   path:"*",
  //   errorElement:<ErrorPage/>
  // }
])

export default function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>  
    </>
  )
}