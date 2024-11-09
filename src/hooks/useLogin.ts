import { LoginData } from "@/types"
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import { holderLogin } from '@/api/Holder/holderLogin'
import { verifierLogin } from "@/api/Verifier/verifierLogin";

export const useLogin = (type: 'HOLDER' | 'VERIFIER') => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (loginData: LoginData) => {
    let response;
    try {
      switch (type) {
        case 'HOLDER':
          response = await holderLogin(loginData);
          alert('로그인에 성공했습니다.');
          localStorage.setItem('accessToken', response.token);
          setAuth({ isAuthenticated: true });
          navigate(RouterPath.holderHome);
          break;
        case 'VERIFIER':
          response = await verifierLogin(loginData);
          alert('로그인에 성공했습니다.');
          localStorage.setItem('accessToken', response);
          setAuth({ isAuthenticated: true });
          navigate(RouterPath.vpList);
          break;
      }
      
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };
  return { handleLogin };
};