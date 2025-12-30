import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home'
import Movie from './Component/Movie'
import Coffe from './Component/Coffe'
import TV from './Component/TV'
import Login from './Component/Auth/Login'
import Register from './Component/Auth/Register'
// import Toaster from 'react-hot-toast'
export default function App() {
  let routers= createBrowserRouter([{
path:"",element:<Layout/>,children:[
  {path:"home",element:<Home/>},
  {path:"movie",element:<Movie/>},
  {path:"tv",element:<TV/>},
  {path:"coffe",element:<Coffe/>},
  {index:true,element:<Login/>},
  {path:"register",element:<Register/>},
]
    }
  ])
  return <>
  {/* <Toaster/> */}
  <RouterProvider router={routers}></RouterProvider>
  </>
}
