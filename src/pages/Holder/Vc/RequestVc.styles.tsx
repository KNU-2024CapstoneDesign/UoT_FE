import styled from '@emotion/styled';
import {Text, TextProps} from "@chakra-ui/react";

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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CertificatePreview = styled.div`
    width: 100%;
    max-width: 400px; /* 이전보다 더 작은 너비로 설정 */
    min-height: 200px; /* 이전보다 더 작은 높이로 설정 */
    border: 2px solid #1e3a8a;
    border-radius: 10px;
    padding: 15px; /* 내부 패딩도 줄임 */
    background-color: #f5faff;
    color: #333;
    font-family: 'Arial', sans-serif;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const UniversityLogo1 = styled.img`
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
`;

export const UniversityLogo2 = styled.img`
  width: 160px;
  height: 40px;
  margin-bottom: 0px;
`;

export const PlaceholderText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  text-align: center;
`;

export const CertificateContent = styled.div`
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    white-space: pre-wrap; /* 줄바꿈 적용 */
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    align-items: center;
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
