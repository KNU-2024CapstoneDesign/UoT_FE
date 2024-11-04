import { useAuth } from '@/hooks/useAuth';
import { AuthPage } from '@/pages/Holder/Auth'
import { HolderHomePage } from './HolderHome';

export const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? 
      <HolderHomePage />
      : 
      <AuthPage />}
    </div>
  );
};