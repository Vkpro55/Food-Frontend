import React from 'react'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import RootLayout from './components/Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
