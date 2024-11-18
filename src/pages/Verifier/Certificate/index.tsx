import React, { useState } from "react";
import CertificateCard from "@/components/VC/CertificateCard";
import {
  Wrapper,
  TitleText,
  ContentWrapper,
} from "./index.styles";
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { Link, useLocation } from "react-router-dom";
import { ValidationButton } from "@/components/ValidationButton";
import { ValidateResponse } from "@/types";

export const CertificatePage = () => {
    const location = useLocation();
    const { applicantId, applicantName } = location.state || {};
    
    // State to store validateData and validResult
    const [validateData, setValidateData] = useState<any>(null);

    // Callback function to update the state when the button is clicked
    const handleValidation = (data: ValidateResponse[]) => {
        setValidateData(data);
    };

  return (
      <Wrapper>
          <Link to="/">
              <StyledLogoText />
          </Link>
          <TitleText fontSize='3x1' as='b'>
              {applicantName} 지원자의 제출 증명서 목록
          </TitleText>
          <ValidationButton 
              applicantId={applicantId} 
              onValidation={handleValidation}  // Pass the callback to the button
          />
          <ContentWrapper>
              <CertificateCard 
                  applicantId={applicantId} 
                  validateData={validateData}
              />
          </ContentWrapper>
      </Wrapper>
  );
};
