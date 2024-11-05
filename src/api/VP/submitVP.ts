import { VPRequest } from "@/types";
import { fetchAPI } from "..";

export const submitVP = async ({ verifierId, vpProof, vc }: VPRequest) => {
  const response = await fetchAPI({
    method: 'POST',
    endpoint: '/holder/vp/submit',
    body: { verifierId, vpProof, vc },
  });

  if (response.status !== 200) {
    throw new Error('VP 제출 실패');
  }
};
