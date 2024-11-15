import styled from '@emotion/styled';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import { TextProps } from '@chakra-ui/react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

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

export const TitleText = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #1e3a8a;
    margin-top: 20px;
`;

export const ButtonWrapper = styled(Flex)`
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
`;

export const IntroductionText = styled(Text)`
    font-size: 16px;
    color: #4a5568;
    max-width: 800px;
    line-height: 1.4;
    margin: 20px 0;
`;

export const FeatureGrid = styled(Grid)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
    width: 100%;
    max-width: 1200px;
    margin-top: 30px;
`;

export const FeatureBox = styled(Box)`
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
`;

export const FeatureIcon = styled(Box)`
    font-size: 32px;
    color: #1e3a8a;
    margin-bottom: 8px;
`;

export const FeatureTitle = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 6px;
`;

export const FeatureDescription = styled(Text)`
    font-size: 14px;
    color: #4a5568;
    line-height: 1.3;
`;
