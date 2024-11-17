import { useState, useEffect } from "react"
import { ValidateResponse } from "@/types";
import { getValidResult } from "@/api/Verifier/getValidResult";

export const useValidate = (applicantId: number) => {
  const [ validateData, setValidateData ] = useState<ValidateResponse[]>([]);
  
  const fetchValidate = async (applicantId: number) => {
    try {
      const data = await getValidResult(applicantId);
      setValidateData(data);
    } catch (error) {
      console.error('검증 데이터를 받아오는데 실패했습니다: ', error);
    }
  }


  useEffect(() => {
    fetchValidate(applicantId);  // Fetch validation data
  }, [applicantId]);

  return { validateData, fetchValidate };
}