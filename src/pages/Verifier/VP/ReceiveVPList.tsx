import { VPList } from "@/components/VP/VPList";
import { Wrapper, TitleWarpper, StyledTitleText } from "./ReceiveVPList.styles";
import { Divider } from "@chakra-ui/react";

export const ReceiveVPListPage = () => {
  return (
    <Wrapper>
      <TitleWarpper>
        <StyledTitleText>&#128196; 제출된 자격 증명 목록</StyledTitleText>
      </TitleWarpper>
      <Divider />
      <VPList />
    </Wrapper>
  );
};
