import { CardBody, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 50%;
  cursor: pointer;
`;

export const Card = styled.div`
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px); /* 살짝 위로 이동 */
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* 더 강한 그림자 */
        background-color: #f7fafc; /* 약간 밝은 색으로 변경 */
    }
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledProfileImage = styled(Image)`
  width: 80px;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 0%;
  float: left;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledNameText = styled.text`
  font-weight: 800;
  font-size: 40px;
`;

export const StyledLastMessage = styled.text`
  font-weight: 500;
  color: black;
  font-size: 12px;
  margin-top: 4px;
`;
