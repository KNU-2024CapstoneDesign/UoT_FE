import { fetchAPI } from "..";

export const getCertificate = async (applicantId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/verifier/applicants/${applicantId}`,
  });
};
