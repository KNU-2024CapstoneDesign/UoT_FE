import { HolderLoginData } from "@/types"
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import { holderLogin } from '@/api/Holder/holderLogin'

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (holderLoginData: HolderLoginData) => {
    let response;
    try {
      response = await holderLogin(holderLoginData);

      alert('로그인에 성공했습니다.');

      const { token } = await response;
      localStorage.setItem('accessToken', token);

      setAuth({ isAuthenticated: true });

      navigate(RouterPath.holderHome);
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };
  return { handleLogin };
};