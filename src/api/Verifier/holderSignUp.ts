import { SignUpData } from '@/types'
import { fetchAPI } from '..';

export const verifierSignUp = async ({ walletAddress, name, password }: SignUpData) => {
  await fetchAPI({
    method: 'POST',
    endpoint: '/auth/verifier/register',
    body: { walletAddress, name, password },
  });
};