import { useState, useEffect } from "react";
import { getIssuer } from "@/api/VC/getIssuer";
import { IssuerResponse } from "@/types";

export const useIssuer = () => {
  const [ issuers, setIssuers ] = useState<IssuerResponse[]>([]);

  useEffect(() => {
    const fetchIssuer = async () => {
      try {
        const data = await getIssuer();
        setIssuers(data.issuerList);
      } catch (error) {
        console.error('발급처를 불러오는데 실패했습니다.', error);
      }
    };
    fetchIssuer();
  }, []);

  return { issuers };
};