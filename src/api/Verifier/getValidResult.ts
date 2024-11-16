import { fetchAPI } from "..";

export const getValidResult = async (applicantId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/verifier/applicants/${applicantId}/validate`,
  });
};
