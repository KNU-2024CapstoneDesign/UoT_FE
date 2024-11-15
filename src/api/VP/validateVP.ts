import { fetchAPI } from "..";

export const validateVP = async (id: string) => {
  return await fetchAPI({
    method: "GET",
    endpoint: "/verifier/vp/" + id,
  });
};
