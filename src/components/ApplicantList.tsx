import { Card } from '@chakra-ui/react';
import { Applicant } from '@/types';
import { useNavigate } from 'react-router-dom';

import {
  StyledCardBody,
  StyledLastMessage,
  StyledNameText,
  StyledProfileImage,
  TextWrapper,
  Wrapper,
} from './ApplicantList.styles';

export const ApplicantList = ({
  applicant,
} : {
  applicant: Applicant;
}) => {
  const navigate = useNavigate();

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const monthDay = date.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const hourMinute = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${monthDay} ${hourMinute}`;
  };

  const handleCardClick = (id: number, name: string) => {
    navigate('/verifier/certificate', { state: { applicantId: id, applicantName: name} }); // 데이터 전달
  };

  return (
    <Wrapper onClick={() => handleCardClick(applicant.id, applicant.name)}>
      <Card
        cursor="pointer"
        _hover={{
          transform: 'scale(1.03)',
          boxShadow: 'xl',
        }}
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      >
        <StyledCardBody>
          <StyledProfileImage
            src={applicant.profileImageUrl}
            alt='프로필'
          />
          <TextWrapper>
            <StyledNameText>
            {applicant.name}{' '}
            <small style={{ color: '#6c757d' }}>지원자</small>
            </StyledNameText>
            <StyledLastMessage>
              <strong>제출 시간: </strong>{formatTimestamp(applicant.submitTime)}
            </StyledLastMessage>
          </TextWrapper>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

export default ApplicantList;
