import { Text } from "@chakra-ui/react";

import { useVP } from "@/hooks/useVP";

import {
  CareerBox,
  StyledCard,
  StyledDefaultText,
  StyledTitleText,
} from "./VPList.styles";

export const VPList = () => {
  const { vpList } = useVP();

  return (
    <StyledCard>
      <StyledTitleText>&#128196; 제출된 자격 증명 목록</StyledTitleText>
      {vpList.length === 0 ? (
        <StyledDefaultText>제출된 자격 증명이 없습니다.</StyledDefaultText>
      ) : (
        vpList.map((vp) => (
          <CareerBox key={vp.id}>
            <Text>{vp.name}</Text>
          </CareerBox>
        ))
      )}
    </StyledCard>
  );
};
