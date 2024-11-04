import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './path';
import { HolderSignUpPage } from '@/pages/Holder/Auth/SignUpHolder';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.signupHolder,
        element: <HolderSignUpPage />,
      },
      {
        path: RouterPath.loginHolder,
        element: <HolderSignUpPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
