import { fetchAPI } from "..";

export const getApplicant = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/verifier/applicants`,
  });
};
