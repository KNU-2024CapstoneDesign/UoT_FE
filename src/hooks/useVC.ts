import { getMyVC } from "@/api/VC/getMyVC";
import { useState, useEffect } from "react"
import { VCResponse } from "@/types";

export const useVC = () => {
  const [ vcData, setVCData ] = useState<VCResponse[]>([]);

  useEffect(() => {
    const fetchVC = async () => {
      try {
        const data = await getMyVC();
        setVCData(data);
      } catch (error) {
        console.error('VC 데이터를 받아오는데 실패했습니다: ', error);
      }
    };
    fetchVC();
  }, []);
  return { vcData };
}