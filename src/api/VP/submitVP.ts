import { VPRequest } from "@/types";
import { fetchAPI } from "..";

export const submitVP = async (vpRequest: VPRequest) => {
  await fetchAPI({
    method: 'POST',
    endpoint: '/credentials/submit',
    body: vpRequest,
  });
};
