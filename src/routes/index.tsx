import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './path';
import { HomePage } from '@/pages/Holder/Home'
import { HolderSignUpPage } from '@/pages/Holder/Auth/SignUpHolder';
import { AuthPage } from '@/pages/Holder/Auth';
import { HolderLoginPage } from '@/pages/Holder/Auth/LoginHolder';
import { RequestVcPage } from '@/pages/Holder/Vc/RequestVc';
import { MyVcPage } from '@/pages/Holder/Vc/MyVc';
import { HolderHomePage } from '@/pages/Holder/Home/HolderHome';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.auth,
        element: <AuthPage />,
      },
      {
        path: RouterPath.signupHolder,
        element: <HolderSignUpPage />,
      },
      {
        path: RouterPath.loginHolder,
        element: <HolderLoginPage />,
      },
      {
        path: RouterPath.holderHome,
        element: <HolderHomePage />,
      },
      {
        path: RouterPath.requestVc,
        element: <RequestVcPage />,
      },
      {
        path: RouterPath.myVc,
        element: <MyVcPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
