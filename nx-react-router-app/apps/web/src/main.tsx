import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './styles.css';

import FooLayout from './app/routes/FooLayout';
import BarLayout from './app/routes/BarLayout';
import BazLayout from './app/routes/BazLayout';
import { BreadcrumbProvider } from './lib/breadcrumb-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/foo" replace />,
  },
  {
    path: '/foo',
    element: <FooLayout />,
    children: [
      {
        path: 'bar',
        element: <BarLayout />,
        children: [
          {
            path: 'baz',
            element: <BazLayout />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <BreadcrumbProvider>
    <RouterProvider router={router} />
  </BreadcrumbProvider>
);
