import { useState, useEffect } from "react"
import { Applicant } from "@/types";
import { getApplicant } from "@/api/Verifier/getApplicant";

export const useApplicant = () => {
  const [ applicantData, setApplicantData ] = useState<Applicant[]>([]);
  const fetchCertificate = async () => {
    try {
      const data = await getApplicant();
      setApplicantData(data);
    } catch (error) {
      console.error('Certificate 데이터를 받아오는데 실패했습니다: ', error);
    }
  }

  useEffect(() => {
    fetchCertificate();
  }, []);
  return { applicantData };
}