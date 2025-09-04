import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { UserList } from './components/UserList';
import { UserDetail } from './components/UserDetail';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/users" />,
  },
  {
    path: '/users',
    element: <UserList />,
  },
  {
    path: '/users/:id',
    element: <UserDetail />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="p-3">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;