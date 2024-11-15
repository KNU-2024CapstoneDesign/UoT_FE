import styled from "@emotion/styled";
import {Text, TextProps} from "@chakra-ui/react";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%; /* 부모 컨테이너의 너비를 채움 */
    text-align: center;
`;


export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
    display: flex; /* 플렉스 박스 사용 */
    flex-direction: row; /* 카드들을 가로로 정렬 */
    flex-wrap: wrap; /* 넘치는 카드는 다음 줄로 넘어가도록 설정 */
    gap: 15px; /* 카드 간 간격 */
    justify-content: center; /* 가로 정렬을 중앙으로 */
    align-items: start; /* 세로 정렬을 상단으로 */
    width: 100%; /* 컨테이너가 부모 크기를 채우도록 설정 */
    padding: 10px; /* 컨테이너 내부 여백 */
`;







export const Card = styled.div`
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const CardTitle = styled.h5`
    font-size: 16px;
    font-weight: bold;
    color: #2b6cb0;
`;

export const CardText = styled.p`
    font-size: 14px;
    color: #4a5568;
    margin: 5px 0;
`;

export const StyledLogoTextWrapper = styled.div`
    width: 100%;
    margin: 100px 0; /* 위아래 여백 추가 */
    display: flex;
    justify-content: center; /* 텍스트 중앙 정렬 */
`;

export const StyledLogoText = (props: TextProps) => (
    <StyledLogoTextWrapper>
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
    </StyledLogoTextWrapper>
);


export const TitleText = styled.h1`
    font-size: 22px;
    font-weight: bold;
    color: #1E3A8A; /* 테마 색상 적용 */
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SubTitleText = styled.h2`
    font-size: 20px;
    color: #2B6CB0; /* 서브 타이틀 테마 색상 적용 */
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
