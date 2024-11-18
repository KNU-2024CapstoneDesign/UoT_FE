import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
`;

export const TitleText = styled.text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const StyledSubtitleText = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: #4a5568;
    margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
    background-color: ${colors.mainColor};
    color: ${colors.white};
    margin-top: 24px;

    &:hover {
        background-color: #ff467e;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    padding: 15px;
    margin-top: 0px;
    text-align: center;
`;
