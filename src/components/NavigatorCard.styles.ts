import styled from '@emotion/styled';
import { Card } from '@chakra-ui/react';
import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

export const TitleWrapper = styled.div`
display: flex;
`;

export const TitleText = styled.text`
  margin: 0 40px;
`;

export const EmojiText = styled.text`
  font-size: 70px;
  text-align: center;
  margin-top: 35px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const CardWrapper = styled(Card)`
  display: flex;
  justify-content: center;  /* Horizontal centering */
  align-items: center;      /* Vertical centering */
  width: 250px;
  height: 200px;
  min-width: 170px;
  margin: 0 20px;
`;

export const CardTitle = styled.text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
  margin-top: 6px;
`;