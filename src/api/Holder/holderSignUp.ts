import { HolderSignUpData } from '@/types'
import { fetchAPI } from '..';

export const holderSignUp = async ({ walletAddress, name, password }: HolderSignUpData) => {
  await fetchAPI({
    method: 'POST',
    endpoint: '/auth/holder/register',
    body: { walletAddress, name, password },
  });
};