import { Wrapper, Card } from './VCCard.styles';
import { useVC } from '@/hooks/useVC';
import { VCResponse } from '@/types';

type VCCardProps = {
  selectedVCs: VCResponse[];
  setSelectedVCs: React.Dispatch<React.SetStateAction<VCResponse[]>>;
};

export const VCCard: React.FC<VCCardProps> = ({ selectedVCs, setSelectedVCs }) => {
  const { vcData } = useVC();

  // vcData가 유효한지 확인
  if (!vcData || vcData.length === 0) {
    return <div>No VC data available.</div>; // 데이터가 없을 경우
  }

  // 카드 선택 시 호출되는 함수
  const handleCardSelect = (data: VCResponse) => {
    setSelectedVCs(prev => {
      if (prev.includes(data)) {
        return prev.filter(vc => vc.id !== data.id); // 이미 선택된 경우, 제거
      } else {
        return [...prev, data]; // 새로 선택된 경우, 추가
      }
    });
  };

  return (
    <Wrapper>
      {vcData.map((data) => (
        <Card 
          key={data.credentialSubject.id || data.issuerName}
          onClick={() => handleCardSelect(data)} // 카드 클릭 시 선택 처리
          style={{ cursor: 'pointer', border: selectedVCs.includes(data) ? '2px solid blue' : '1px solid gray' }} // 선택된 카드에 스타일 적용
        >
          <h5 className="card-title">{data.issuerName}</h5> {/* 발급기관 */}
          <p className="card-text">발급일: {data.issuanceDate}</p> {/* 날짜 형식 변환 */}
          {Object.entries(data.credentialSubject).map(([key, value]) => (
            key !== "id" && (
              <p className="card-text" key={key}>
                <strong>{key}:</strong> {value}
              </p>
            )
          ))}
        </Card>
      ))}
    </Wrapper>
  );
};

export default VCCard;
