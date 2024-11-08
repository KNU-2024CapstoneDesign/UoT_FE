import { fetchAPI } from "..";

export const validateVP = async (id: string) => {
  return await fetchAPI({
    method: "POST",
    endpoint: "/verifier/vp/" + id,
  });
};
