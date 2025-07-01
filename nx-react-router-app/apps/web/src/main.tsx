import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';

import FooLayout from './app/routes/FooLayout';
import BarLayout from './app/routes/BarLayout';
import BazLayout from './app/routes/BazLayout';
import { BreadcrumbProvider } from './lib/breadcrumb-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-600">
          Try visiting <code>/foo/bar/baz</code>
        </p>
      </main>
    ),
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
