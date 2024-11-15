import { getVPList } from "@/api/VP/getVPList";
import { VPResponse } from "@/types";
import { useEffect, useState } from "react";

export const useVP = () => {
  const [vpList, setVPList] = useState<VPResponse[]>([]);

  const fetchVP = async () => {
    try {
      const data = await getVPList();
      setVPList(data);
    } catch (error) {
      console.error("VP 목록을 불러오는데 실패했습니다: ", error);
    }
  };

  useEffect(() => {
    fetchVP();
  }, []);

  return { vpList };
};
