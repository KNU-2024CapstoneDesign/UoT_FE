import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%; /* 부모 컨테이너의 너비를 채움 */
    text-align: center;
`;


export const VPProcessContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
`;

export const VPStage = styled.div<{ active: boolean }>`
    padding: 12px 18px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ active }) => (active ? '#ffffff' : '#a0aec0')};
    background-color: ${({ active }) => (active ? '#3182ce' : '#e2e8f0')};
    box-shadow: ${({ active }) => (active ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')};
    transition: all 0.2s ease-in-out;
`;

export const VPArrow = styled.div<{ active: boolean }>`
    font-size: 22px;
    font-weight: bold;
    color: ${({ active }) => (active ? '#3182ce' : '#a0aec0')};
    transition: color 0.2s ease-in-out;
`;

export const CardContainer = styled.div`
    display: flex; /* 플렉스 박스를 사용하여 가로 정렬 */
    flex-direction: row; /* 카드들이 가로로 정렬되도록 설정 */
    flex-wrap: nowrap; /* 줄바꿈 없이 가로로만 배치 */
    gap: 15px; /* 카드 간의 간격 */
    overflow-x: auto; /* 가로 스크롤 활성화 */
    padding: 10px; /* 컨테이너 내부 여백 */
    width: 100%; /* 컨테이너가 부모 크기를 채우도록 설정 */
`;




export const SelectedCount = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #2b6cb0;
    margin: 15px 0;
    text-align: center;
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

export const TitleWrapper = styled.div`
    margin-bottom: 24px;
    h1 {
        font-size: 20px;
        font-weight: bold;
        color: #1e3a8a;
    }
    p {
        font-size: 16px;
        color: #4a5568;
        margin-top: 8px;
    }
`;

export const SubmitWrapper = styled.div`
    margin-top: 25px;
    button {
        padding: 12px 25px;
        background-color: #3182ce;
        color: #ffffff;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            background-color: #2b6cb0;
        }
        &:disabled {
            background-color: #cbd5e0;
            cursor: not-allowed;
        }
    }
`;

export const TitleText = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #1E3A8A; /* 테마 색상 적용 */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

