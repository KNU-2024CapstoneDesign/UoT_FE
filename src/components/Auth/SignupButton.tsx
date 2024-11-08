import { RouterPath } from "@/routes/path";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

type SignupButtonProps = {
  type: 'HOLDER' | 'VERIFIER';
};

export const SignupButton = ({ type }: SignupButtonProps) => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    switch (type) {
      case 'HOLDER':
        navigate(RouterPath.signupHolder);
        break;
      case 'VERIFIER':
        navigate(RouterPath.signupVerifier);
        break;
    }
  }

  return (
    <Button onClick={navigateToSignup}>
      회원가입
    </Button>
  );
};