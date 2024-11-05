import { submitVP } from "@/api/VP/submitVP";
import { VPRequest } from "@/types";

export const useSendVP = () => {
  
  const handleSendVP = async (vpRequest: VPRequest) => {
    try{
      await submitVP(vpRequest);

      alert('성공적으로 VP를 제출했습니다.');
    } catch (error) {
      console.error('VP 제출 실패:', error);
      alert('VP를 제출하지 못했습니다.');
    }
  };

  return { handleSendVP };
};