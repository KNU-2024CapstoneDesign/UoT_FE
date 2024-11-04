import { holderSignUp } from "@/api/Holder/holderSignUp"
import { HolderSignUpData } from "@/types";

export const useSignUp = () => {
  const handleSignUp = async (holderSignUpData: HolderSignUpData) => {
    try{
      await holderSignUp(holderSignUpData);
      alert('회원가입에 성공했습니다.');
      return true;
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
      return false;
    }
  };
  return { handleSignUp };
};