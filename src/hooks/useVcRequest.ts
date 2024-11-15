import { RequestVcData } from "@/types";
import { requestVC } from "@/api/VC/requestVC";

export const useVcRequest = () => {
  const handleRequestVc = async (requestVcData: RequestVcData) => {
    try {
      await requestVC(requestVcData);
      alert('증명서 발급 요청에 성공했습니다.');
    } catch (error) {
      console.error('증명서 발급 요청 실패: ', error);
      alert('증명서 발급 요청에 실패했습니다.');
    }
  };
  return { handleRequestVc };
};