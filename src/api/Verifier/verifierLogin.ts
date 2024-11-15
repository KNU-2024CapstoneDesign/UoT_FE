import { LoginData } from '@/types';
import { fetchAPI } from '..';

export const verifierLogin = async ({ walletAddress, password }: LoginData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/verifier/login',
    body: { walletAddress, password },
  });
};
