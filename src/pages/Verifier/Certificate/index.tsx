import React, { useState } from "react";
import CertificateCard from "@/components/VC/CertificateCard";
import {
  Wrapper,
  TitleWrapper,
  StyledTitleText,
  ContentWrapper,
} from "./index.styles";
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { Link, useLocation } from "react-router-dom";
import { ValidationButton } from "@/components/ValidationButton";
import { CertificateResponse, ValidResultResponse } from "@/types";

export const CertificatePage = () => {
    const location = useLocation();
    const { applicantId } = location.state || {};
    
    // State to store validateData and validResult
    const [validateData, setValidateData] = useState<any>(null);
    const [validResultData, setValidResultData] = useState<any>(null);

    // Callback function to update the state when the button is clicked
    const handleValidation = (data: CertificateResponse[], result: ValidResultResponse) => {
        setValidateData(data);
        setValidResultData(result);
    };

  return (
      <Wrapper>
          <Link to="/">
              <StyledLogoText />
          </Link>
          <TitleWrapper>
              <StyledTitleText>oo 지원자의 제출 증명서 목록</StyledTitleText>
          </TitleWrapper>
          <ValidationButton 
              applicantId={applicantId} 
              onValidation={handleValidation}  // Pass the callback to the button
          />
          <ContentWrapper>
              <CertificateCard 
                  applicantId={applicantId} 
                  validateData={validateData} 
                  validResultData={validResultData} 
              />
          </ContentWrapper>
      </Wrapper>
  );
};
