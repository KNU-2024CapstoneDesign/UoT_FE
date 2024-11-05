import { Wrapper, Card } from './VCCard.styles';
import { useVC } from '@/hooks/useVC';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router에서 navigate 훅 가져오기
import { RouterPath } from '@/routes/path';
import { VCResponse } from '@/types';

const VCCard = () => {
    const { vcData } = useVC();
    const navigate = useNavigate(); // navigate 훅을 사용
    const [selectedVCs, setSelectedVCs] = useState<VCResponse[]>([]); // 선택된 VC IDs 상태

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

    // 제출 버튼 클릭 시 호출되는 함수
    const handleNavigate = () => {
        if (selectedVCs.length === 0) {
            alert('카드를 선택해 주세요.'); // 선택된 카드가 없을 경우 알림
        } else {
            navigate(RouterPath.sendVP, { state: { vcs: selectedVCs } }); // 선택된 VC IDs와 함께 네비게이트
        }
    };

    return (
        <Wrapper>
            <button onClick={handleNavigate} disabled={selectedVCs.length === 0}>네비게이트</button> {/* 네비게이트 버튼 */}
            {vcData.map((data) => (
                <Card 
                    key={data.credentialSubject.id || data.issuerName}
                    onClick={() => handleCardSelect(data)} // 카드 클릭 시 선택 처리
                    style={{ cursor: 'pointer', border: selectedVCs.includes(data) ? '2px solid blue' : '1px solid gray' }} // 선택된 카드에 스타일 적용
                >
                    <h5 className="card-title">{data.issuerName}</h5> {/* 발급기관 */}
                    <p className="card-text">발급일: {data.issuanceDate.split('T')[0]}</p> {/* 날짜 형식 변환 */}
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