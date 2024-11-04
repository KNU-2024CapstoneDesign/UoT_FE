import { HolderLoginData } from '@/types';
import { fetchAPI } from '..';

export const holderLogin = async ({ walletAddress, password }: HolderLoginData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/holder/login',
    body: { walletAddress, password },
  });
};
