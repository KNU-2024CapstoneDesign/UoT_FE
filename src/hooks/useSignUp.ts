import { holderSignUp } from "@/api/Holder/holderSignUp"
import { HolderSignUpData } from "@/types";
import { useNavigate } from "react-router-dom";
import { RouterPath } from '@/routes/path';

export const useSignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async (holderSignUpData: HolderSignUpData) => {
    try{
      await holderSignUp(holderSignUpData);
      alert('회원가입에 성공했습니다.');
      navigate(RouterPath.loginHolder);
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };
  return { handleSignUp };
};