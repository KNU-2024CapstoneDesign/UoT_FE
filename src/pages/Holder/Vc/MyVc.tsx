import { useState } from 'react';
import { VCCard } from '@/components/VC/VCCard';
import { VCSubmitButton } from '@/components/VC/VCSubmitButton';
import { VCResponse } from '@/types';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

export const MyVcPage = () => {
  const navigate = useNavigate();
  const [selectedVCs, setSelectedVCs] = useState<VCResponse[]>([]);

  const handleNavigate = () => {
    if (selectedVCs.length === 0) {
      alert('카드를 선택해 주세요.');
    } else {
      navigate(RouterPath.sendVP, { state: { vcs: selectedVCs } });
    }
  };

  return (
    <>
      {/* Pass handleNavigate and disabled status to NavigateButton */}
      <VCSubmitButton onClick={handleNavigate} disabled={selectedVCs.length === 0} />
      {/* Pass selectedVCs and setSelectedVCs as props to VCCard */}
      <VCCard selectedVCs={selectedVCs} setSelectedVCs={setSelectedVCs} />
    </>
  );
};