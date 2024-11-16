import ApplicantList from "@/components/ApplicantList";
import {
    Wrapper,
    TitleWrapper,
    StyledTitleText,
    ContentWrapper,
} from "./ReceiveVPList.styles";
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { Link } from "react-router-dom";

export const ReceiveVPListPage = () => {
    return (
        <Wrapper>
            <Link to="/">
                <StyledLogoText />
            </Link>
            <TitleWrapper>
                <StyledTitleText>지원자 목록</StyledTitleText>
            </TitleWrapper>
            <ContentWrapper>
                <ApplicantList />
            </ContentWrapper>
        </Wrapper>
    );
};
