import { useState, useEffect } from "react";
import { getVerifier } from "@/api/VP/getVerifier"; 
import { VerfierResponse } from "@/types";

export const useVerifier = () => {
  const [ verfiers, setVerifiers ] = useState<VerfierResponse[]>([]);

  useEffect(() => {
    const fetchVerifier = async () => {
      try {
        const data = await getVerifier();
        setVerifiers(data);
      } catch (error) {
        console.error('제출처를 불러오는데 실패했습니다.', error);
      }
    };
    fetchVerifier();
  }, []);

  return { verfiers };
};