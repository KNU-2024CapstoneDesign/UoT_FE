import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex; /* Flexbox로 설정 */
    flex-wrap: wrap; /* 줄바꿈 허용 */
    gap: 1rem; /* 카드 간 간격 */
    justify-content: center; /* 카드들을 가운데 정렬 */
    padding: 10px; /* 내부 여백 */
    width: 100%; /* 부모 요소의 너비를 채움 */
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


