import { fetchAPI } from "..";

export const getVPList = async () => {
  return await fetchAPI({
    method: "GET",
    endpoint: "/verifier/vp",
  });
};
