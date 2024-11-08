import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWarpper = styled.div`
  display: flex;
`;

export const StyledTitleText = styled.text`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0px 30px;
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  margin-top: 24px;

  &:hover {
    background-color: #ff467e;
  }
`;
