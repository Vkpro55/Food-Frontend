import React from 'react';
import Home from './pages/Home';
import Cartpage from './pages/Cartpage';
import Signup from './pages/Singup';
import Login from './pages/Login';
import RootLayout from './components/Layouts/RootLayout';
import UserLayout from './components/Layouts/UserLayout';
import ProtectedRoute from './components/ProtectedRoute';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes */}
      <Route path='/' element={<UserLayout />}>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>

      {/* Protected routes */}
      <Route path='/' element={<ProtectedRoute />}>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cartpage />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
