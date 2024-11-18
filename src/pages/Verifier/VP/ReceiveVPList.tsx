import ApplicantList from "@/components/ApplicantList";
import {
    Wrapper,
    TitleText,
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
            <TitleText fontSize='3x1' as='b'>
                지원자 목록
            </TitleText>
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
