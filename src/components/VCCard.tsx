import { Wrapper, Card } from './VCCard.styles';
import { useVC } from '@/hooks/useVC';

const VCCard = () => {
    const { vcData } =  useVC();

    // vcData가 유효한지 확인
    if (!vcData) {
        return <div>No VC data available.</div>; // 데이터가 없을 경우
    }

    return (
        <Wrapper>
            <Card key={vcData.credentialSubject.id || vcData.issuerName}>
                <h5 className="card-title">{vcData.issuerName}</h5> {/* 발급기관 */}
                <p className="card-text">발급일: {vcData.issuanceDate.split('T')[0]}</p> {/* 날짜 형식 변환 */}

                {Object.entries(vcData.credentialSubject).map(([key, value]) => (
                    key !== "id" && ( // 'id'는 제외하고 키-값 쌍 렌더링
                        <p className="card-text" key={key}>
                            <strong>{key}:</strong> {value}
                        </p>
                    )
                ))}
            </Card>
        </Wrapper>
    );
};

export default VCCard;
