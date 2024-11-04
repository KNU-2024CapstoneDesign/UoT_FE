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
  width: 250px;
  height: 300px;
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