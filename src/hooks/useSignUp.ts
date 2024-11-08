import { holderSignUp } from "@/api/Holder/holderSignUp"
import { SignUpData } from "@/types";
import { useNavigate } from "react-router-dom";
import { RouterPath } from '@/routes/path';
import { verifierSignUp } from "@/api/Verifier/holderSignUp";

export const useSignUp = (registerType: 'HOLDER' | 'VERIFIER') => {
  const navigate = useNavigate();

  const handleSignUp = async (signUpData: SignUpData) => {
    try{
      switch (registerType) {
        case 'HOLDER':
          await holderSignUp(signUpData);
          alert('회원가입에 성공했습니다.');
          navigate(RouterPath.loginHolder);
          break;
        case 'VERIFIER':
          await verifierSignUp(signUpData);
          alert('회원가입에 성공했습니다.');
          navigate(RouterPath.loginVerifier);
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };
  return { handleSignUp };
};