import { Wrapper, Card } from './VCCard.styles';
import { useVC } from '@/hooks/useVC';

const VCCard = () => {
    const { vcData } = useVC();

    // vcData가 유효한지 확인
    if (!vcData || vcData.length === 0) {
        return <div>No VC data available.</div>; // 데이터가 없을 경우
    }

    return (
        <Wrapper>
            {vcData.map((data) => ( // 각 VCResponse 객체를 반복하여 렌더링
                <Card key={data.credentialSubject.id || data.issuerName}>
                    <h5 className="card-title">{data.issuerName}</h5> {/* 발급기관 */}
                    <p className="card-text">발급일: {data.issuanceDate.split('T')[0]}</p> {/* 날짜 형식 변환 */}

                    {Object.entries(data.credentialSubject).map(([key, value]) => (
                        key !== "id" && ( // 'id'는 제외하고 키-값 쌍 렌더링
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
