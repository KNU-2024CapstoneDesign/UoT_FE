import { SignUpData } from '@/types'
import { fetchAPI } from '..';

export const holderSignUp = async ({ walletAddress, name, password }: SignUpData) => {
  await fetchAPI({
    method: 'POST',
    endpoint: '/auth/holder/register',
    body: { walletAddress, name, password },
  });
};