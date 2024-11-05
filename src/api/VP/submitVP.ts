import { VPRequest } from "@/types";
import { fetchAPI } from "..";

export const submitVP = async (vpRequest: VPRequest) => {
  const response = await fetchAPI({
    method: 'POST',
    endpoint: '/credentials/submit',
    body: vpRequest,
  });

  if (response.status !== 200) {
    throw new Error('VP 제출 실패');
  }
};
