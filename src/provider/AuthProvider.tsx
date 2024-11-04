import { useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types';

const initialAuthState: AuthContextType = {
  isAuthenticated: false,
  setAuth: () => {},
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuthState] = useState<AuthContextType>({
    ...initialAuthState,
    setAuth: (newAuth) => {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: newAuth.isAuthenticated,
      }));
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
      }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>
  );
};