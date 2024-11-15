import { RequestVcData } from "@/types";
import { fetchAPI } from "..";

export const requestVC = async (requestVcData: RequestVcData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/credentials/request',
    body: requestVcData
  });
};