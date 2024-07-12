import React from 'react'
import { BrowserRouter, Route , RouterProvider, Routes , createBrowserRouter} from 'react-router-dom';
import LayoutDefault from './LayoutDefault';
import LayoutContact from './LayoutContact';
import LayoutAbout from './LayoutAbout';
import Post_Layout from './Post_Layout';
import LayoutHome from './LayoutHome';
import Layout from './Layout';
import Laptop from './Laptop';
import Mobile from './Mobile';
import Watch from './Watch';
import Tv from './Tv';
import Error from './Error';

const router = createBrowserRouter([
  {
    path:"/",
    errorElement:<Error/>
  },
])

export default function app() {
  return (
    <>
    <RouterProvider router={router}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LayoutDefault/>}/> {/* index : It share parent path to child , It use when parent and child both have same path */}
          <Route path="home" element={<LayoutHome/>}/>
          <Route path="contact" element={<LayoutContact/>}/>
          <Route path="about" element={<LayoutAbout/>}/>
          <Route path="post" element={<Post_Layout/>}>
            {/* <Route path=':category' element={</>}/> */}
            <Route path="mobile" element={<Mobile/>}/>
            <Route path="laptop" element={<Laptop/>}/>
            <Route path="tv" element={<Tv/>}/>
            <Route path="watch" element={<Watch/>}/>
          </Route>
        </Route>
        {/* <Route path="*" element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}