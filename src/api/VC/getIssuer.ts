import { fetchAPI } from '..';

export const getIssuer = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/credentials/issuers',
  });
};