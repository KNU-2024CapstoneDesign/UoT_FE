import ApplicantList from "@/components/ApplicantList";
import {
    Wrapper,
    TitleWrapper,
    StyledTitleText,
} from "./ReceiveVPList.styles";
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { Link } from "react-router-dom";
import { useApplicant } from "@/hooks/useApplicant";

export const ReceiveVPListPage = () => {
    const { applicantData } = useApplicant();

    return (
        <Wrapper>
            <Link to="/">
                <StyledLogoText />
            </Link>
            <TitleWrapper>
                <StyledTitleText>지원자 목록</StyledTitleText>
            </TitleWrapper>
            {applicantData.length === 0? (
                <p>현재 지원자가 없습니다.</p>
            ) : (
                applicantData.map((applicant) => (
                    <ApplicantList applicant={applicant} />
                ))
            )}
        </Wrapper>
    );
};
