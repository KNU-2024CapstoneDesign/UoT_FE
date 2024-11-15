import styled from '@emotion/styled';
import {Text, TextProps} from "@chakra-ui/react";

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
  align-items: center;
  margin: 60px auto;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const StyledTitleText = styled.text`
  font-size: 24px;
  font-weight: 700;
  margin: 13px 0 20px 8px;
`;

export const StyledConnectWalletText = styled.text`
  font-size: 18px;
  font-weight: 500;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
