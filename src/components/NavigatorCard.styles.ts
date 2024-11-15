import styled from '@emotion/styled';
import { Card } from '@chakra-ui/react';
import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;


export const TitleText = styled.text`
  margin: 0 40px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const CardWrapper = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
  min-width: 170px;
  margin: 0 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-8px); /* 부드럽게 떠오르는 효과 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 그림자 깊이 증가 */
    background-color: #f0f8ff; /* 배경색을 약간 밝게 변경 */
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const EmojiText = styled.div`
  font-size: 70px;
  text-align: center;
  margin-top: 35px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
  margin-top: 6px;
`;
