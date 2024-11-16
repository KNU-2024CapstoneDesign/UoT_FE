import { Wrapper, Card } from '@/components/VC/VCCard.styles';
import { useApplicant } from '@/hooks/useApplicant';
import { useNavigate } from 'react-router-dom';

export const ApplicantList = () => {
  const { applicantData } = useApplicant();
  const navigate = useNavigate();

  // vcData가 유효한지 확인
  if (!applicantData || applicantData.length === 0) {
    return <div>제출자가 없습니다.</div>; // 데이터가 없을 경우
  }

  const navigateToCertificatePage = (id: number) => {
    navigate('/verifier/certificate', { state: { applicantId: id } }); // 데이터 전달
  };

  return (
    <Wrapper>
      {applicantData.map((data) => (
        <Card key={data.id} onClick={() => navigateToCertificatePage(data.id)}>
          {Object.entries(data).map(([key, value]) => (
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

export default ApplicantList;
