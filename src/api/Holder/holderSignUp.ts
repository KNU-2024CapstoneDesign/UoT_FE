import { HolderSignUpData } from '@/types'
import { fetchAPI } from '..';

export const holderSignUp = async ({ walletAddress, name, password }: HolderSignUpData) => {
  const response = await fetchAPI({
    method: 'POST',
    endpoint: '/auth/holder/register',
    body: { walletAddress, name, password },
  });

  if (response.status !== 201) {
    throw new Error('회원가입 실패');
  }
};