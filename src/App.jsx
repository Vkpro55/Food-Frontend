import React from 'react'
import Home from './pages/Home'
import Cartpage from './pages/Cartpage'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import RootLayout from './components/Layouts/RootLayout';;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='cart' element={<Cartpage />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
