import { useState, useEffect } from "react"
import { CertificateResponse } from "@/types";
import { getCertificate } from "@/api/Verifier/getCertificate";

export const useCertificate = (applicantId: number) => {
  const [ certificateData, setCertificateData ] = useState<CertificateResponse[]>([]);
  const fetchCertificate = async (applicantId: number) => {
    try {
      const data = await getCertificate(applicantId);
      setCertificateData(data);
    } catch (error) {
      console.error('Certificate 데이터를 받아오는데 실패했습니다: ', error);
    }
  }

  useEffect(() => {
    fetchCertificate(applicantId);
  }, [applicantId]);
  return { certificateData };
}