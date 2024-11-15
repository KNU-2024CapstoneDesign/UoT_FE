import styled from '@emotion/styled';
import {Card, Text, TextProps} from '@chakra-ui/react';
import { colors } from '@/styles/colors';

export const StyledLogoText = (props: TextProps) => (
    <Text
        fontSize={{ base: "2xl", md: "3xl" }} // 반응형 폰트 크기
        fontWeight="extrabold"
        bgGradient="linear(to-r, #1E3A8A, #3182CE, #FF1658)"
        bgClip="text"
        textAlign="center"
        lineHeight="shorter"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.15)"
        {...props}
    >
        블록체인과 DID를 활용한 스마트 컨트랙트 기반 증명서 발급 및 검증 서비스
    </Text>
);

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

export const TitleWrapper = styled.div`
display: flex;
`;

export const TitleText = styled.text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
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