import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterPath } from "./path";
import { HomePage } from "@/pages/Holder/Home";
import { HolderSignUpPage } from "@/pages/Holder/Auth/SignUpHolder";
import { AuthPage } from "@/pages/Holder/Auth";
import { HolderLoginPage } from "@/pages/Holder/Auth/LoginHolder";
import { RequestVcPage } from "@/pages/Holder/Vc/RequestVc";
import { MyVcPage } from "@/pages/Holder/Vc/MyVc";
import { HolderHomePage } from "@/pages/Holder/Home/HolderHome";
import { VpSubmitPage } from "@/pages/Holder/Vp/VpSubmit";
import { ReceiveVPListPage } from "@/pages/Verifier/VP/ReceiveVPList";
import { VerifierLoginPage } from "@/pages/Verifier/Auth/LoginVerifier";
import { VerifierSignUpPage } from "@/pages/Verifier/Auth/SignUpVerifier";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.holderHome,
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
      {
        path: RouterPath.sendVP,
        element: <VpSubmitPage />,
      },
      {
        path: RouterPath.signupVerifier,
        element: <VerifierSignUpPage />,
      },
      {
        path: RouterPath.loginVerifier,
        element: <VerifierLoginPage />,
      },
      {
        path: RouterPath.vpList,
        element: <ReceiveVPListPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
