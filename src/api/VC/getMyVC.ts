import { VCResponse } from "@/types";

export const getMyVC = async () => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch('/api/credentials', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error('발급받은 VC 가져오기 실패');
  }

  const data: VCResponse[] = await response.json();
  return data;
};
