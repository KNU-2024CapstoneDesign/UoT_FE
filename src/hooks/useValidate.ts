import { useState, useEffect } from "react"
import { getCertificate } from "@/api/Verifier/getCertificate";
import { ValidateResponse, ValidResultResponse } from "@/types";
import { getValidResult } from "@/api/Verifier/getValidResult";

export const useValidate = (applicantId: number) => {
  const [ validateData, setValidateData ] = useState<ValidateResponse[]>([]);
  const [ validResultData, setValidResultData ] = useState<ValidResultResponse>();
  
  const fetchValidate = async (applicantId: number) => {
    try {
      const data = await getCertificate(applicantId);
      setValidateData(data);
    } catch (error) {
      console.error('블록체인에 저장된 데이터를 받아오는데 실패했습니다: ', error);
    }
  }

  const fetchValidResult = async(applicantId: number) => {
    try {
      const data = await getValidResult(applicantId);
      setValidResultData(data);
    } catch (error) {
      console.error('검증 결과를 받아오는데 실패했습니다: ', error);
    }
  }


  useEffect(() => {
    fetchValidate(applicantId);  // Fetch validation data
    fetchValidResult(applicantId);  // Fetch valid result data
  }, [applicantId]);
  
  return { validateData, validResultData, fetchValidate, fetchValidResult };
}