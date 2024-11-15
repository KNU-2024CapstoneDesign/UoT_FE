import React, { useState } from 'react';
import { VCResponse } from "@/types";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {
  Wrapper,
  FormWrapper,
  CardContainer,
  Card,
  CardTitle,
  CardText,
  TitleText,
  SubTitleText,
} from './VpSubmit.styles';
import { Select, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useSendVP } from '@/hooks/useSendVP';
import { useVerifier } from '@/hooks/useVerifier';
import {RouterPath} from "@/routes/path";
import {StyledLogoText} from "@/pages/Holder/Auth/SignUpHolder.styles";

export const VpSubmitPage = () => {
  const location = useLocation();
  const vcs = location.state?.vcs;
  const navigate = useNavigate();
  const { handleSendVP } = useSendVP();
  const { verfiers } = useVerifier();

  const [vpRequest, setVPRequest] = useState({
    verifierId: 0,
    vcIds: vcs ? vcs.map((data: VCResponse) => data.id) : [],
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVPRequest((prev) => ({
      ...prev,
      verifierId: Number(e.target.value),
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSendVP(vpRequest);
    navigate(RouterPath.holderHome);
  };

  if (!vcs || vcs.length === 0) {
    return <div>제출할 증명서 데이터가 없습니다.</div>;
  }

  return (
      <Wrapper>
        <Link to="/">
          <StyledLogoText></StyledLogoText>
        </Link>
        <TitleText>증명서 제출</TitleText> {/* 타이틀 스타일 적용 */}
        <form onSubmit={handleFormSubmit}>
          <FormWrapper>
            <FormControl id='verifierId' isRequired>
              <FormLabel>제출 기관</FormLabel>
              <Select
                  placeholder='제출처를 선택하세요'
                  value={vpRequest.verifierId}
                  onChange={handleSelectChange}
                  focusBorderColor='#FF1658'
              >
                {Array.isArray(verfiers) && verfiers.length > 0 ? (
                    verfiers.map((verfier) => (
                        <option key={verfier.id} value={verfier.id}>
                          {verfier.name}
                        </option>
                    ))
                ) : (
                    <option disabled>제출처를 불러오는 중입니다...</option>
                )}
              </Select>
            </FormControl>
            <Button type='submit' colorScheme='blue' mt='20px'>
              제출
            </Button>
          </FormWrapper>
        </form>

        <SubTitleText>제출할 증명서 목록</SubTitleText> {/* 서브 타이틀 스타일 적용 */}
        <CardContainer>
          {vcs.map((data: VCResponse) => (
              <Card key={data.credentialSubject.id || data.issuerName}>
                <CardTitle>{data.issuerName}</CardTitle>
                <CardText>발급일: {data.issuanceDate.split('T')[0]}</CardText>
                {Object.entries(data.credentialSubject).map(([key, value]) =>
                    key !== 'id' ? (
                        <CardText key={key}>
                          <strong>{key}:</strong> {value}
                        </CardText>
                    ) : null
                )}
              </Card>
          ))}
        </CardContainer>
      </Wrapper>
  );
};
