import {
    Wrapper,
    TitleWrapper,
    StyledTitleText,
    StyledSubtitleText,
    ContentWrapper,
    DividerLine,
} from "./ReceiveVPList.styles";
import { VPList } from "@/components/VP/VPList";
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { Link } from "react-router-dom";

export const ReceiveVPListPage = () => {
    return (
        <Wrapper>
            <Link to="/">
                <StyledLogoText />
            </Link>
            <TitleWrapper>
                <StyledTitleText>제출된 자격 증명 목록</StyledTitleText>
                <StyledSubtitleText>제출받은 증명서의 진위 여부를 검증하세요.</StyledSubtitleText>
            </TitleWrapper>
            <ContentWrapper>
                <VPList />
            </ContentWrapper>
        </Wrapper>
    );
};
