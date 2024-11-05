import { fetchAPI } from '..';

export const getVerifier = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/credentials/verifiers',
  });
};