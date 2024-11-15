import { LoginData } from '@/types';
import { fetchAPI } from '..';

export const holderLogin = async ({ walletAddress, password }: LoginData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/holder/login',
    body: { walletAddress, password },
  });
};
