import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Test } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
