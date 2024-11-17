import React, { useState, useEffect } from 'react';
import { Text, Input, FormControl, FormLabel, Select, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper, CertificatePreview, UniversityLogo1, UniversityLogo2, PlaceholderText, CertificateContent, StyledLogoText} from './RequestVc.styles';
import { RequestVcData } from '@/types';
import { useVcRequest } from '@/hooks/useVcRequest';
import { useIssuer } from '@/hooks/useIssuer';
import knuSealLogo from './knuSealLogo.png';
import knuTextLogo from './knuTextLogo.png';
import {Link, useNavigate} from "react-router-dom";
import { RouterPath } from '@/routes/path';

export const RequestVcPage = () => {
  const { handleRequestVc } = useVcRequest();
  const { issuers } = useIssuer();
  const [requireData, setRequireData] = useState<string[]>([]);
  const [requestVcData, setRequestVcData] = useState<RequestVcData>({
    holderDid: '',
    issuerId: 0,
    requireData: {},
  });
  const [certificatePreview, setCertificatePreview] = useState('');
  const [issuerSelected, setIssuerSelected] = useState(false); // 발급처 선택 여부 상태
  const navigator = useNavigate();

  useEffect(() => {
    const getWalletAddress = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const walletAddress = accounts[0];
          const holderDid = `did:ethr:${walletAddress}`;
          setRequestVcData((prev) => ({
            ...prev,
            holderDid,
          }));
        } catch (error) {
          console.error('지갑 주소 가져오기 오류:', error);
        }
      } else {
        console.error('Ethereum provider가 감지되지 않습니다.');
      }
    };
    getWalletAddress();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIssuerId = Number(e.target.value);
    setIssuerSelected(selectedIssuerId !== 0); // 발급처가 선택되었는지 여부 업데이트
    const selectedIssuer = issuers.find(issuer => issuer.id === selectedIssuerId);
    if (selectedIssuer) {
      setRequireData(selectedIssuer.requireData);
    }
    setRequestVcData((prev) => ({
      ...prev,
      issuerId: selectedIssuerId,
    }));
    updateCertificatePreview(selectedIssuer?.name || '', requestVcData.requireData['studentId'] || '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRequestVcData((prev) => ({
      ...prev,
      requireData: {
        ...prev.requireData,
        [id]: value,
      },
    }));
    updateCertificatePreview(requestVcData.issuerId !== 0 ? issuers.find(issuer => issuer.id === requestVcData.issuerId)?.name || '' : '', value);
  };

  const updateCertificatePreview = (issuerName: string, studentId: string) => {
    setCertificatePreview(`발급처: ${issuerName}\n학생 ID: ${studentId}\n`);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRequestVc(requestVcData);
    navigator(RouterPath.myVc);
  };

  return (
      <Wrapper>
        <Link to="/">
          <StyledLogoText></StyledLogoText> {/* 로고 텍스트 추가 */}
        </Link>
        <TitleWrapper>
          <Text fontSize="2xl" as="b" mt="13px" mb="20px" ml="8px">
            졸업 및 재학 증명서 발급 요청
          </Text>
        </TitleWrapper>
        <form onSubmit={handleFormSubmit}>
          <FormWrapper>
            <FormControl id="issuerId" isRequired>
              <FormLabel>발급처</FormLabel>
              <Select
                  placeholder="발급처를 선택하세요"
                  focusBorderColor="#FF1658"
                  mb="10px"
                  value={requestVcData.issuerId}
                  onChange={handleSelectChange}
              >
                {Array.isArray(issuers) && issuers.length > 0 ? (
                    issuers.map((issuer) => (
                        <option key={issuer.id} value={issuer.id}>
                          {issuer.name}
                        </option>
                    ))
                ) : (
                    <option disabled>발급처를 불러오는 중입니다...</option>
                )}
              </Select>
            </FormControl>

            {requireData.length > 0 ? (
                requireData.map((field, index) => (
                    <FormControl key={index} id={field} isRequired>
                      <FormLabel>{field}</FormLabel>
                      <Input
                          type="text"
                          placeholder={`Enter ${field}`}
                          focusBorderColor="#FF1658"
                          mb="10px"
                          onChange={handleInputChange}
                      />
                    </FormControl>
                ))
            ) : null}
          </FormWrapper>
          <Button type="submit" colorScheme="teal" mt="10px">
            제출
          </Button>
        </form>

        {/* 증명서 미리보기 */}
        <CertificatePreview>
          {issuerSelected ? (
              <>
                <UniversityLogo1 src={knuSealLogo} alt="KNU Seal Logo" />
                <CertificateContent>{certificatePreview || '증명서 발급 정보를 입력하세요...'}</CertificateContent>
                <UniversityLogo2 src={knuTextLogo} alt="KNU Text Logo" />
              </>
          ) : (
              <PlaceholderText>증명서 미리보기</PlaceholderText>
          )}
        </CertificatePreview>
      </Wrapper>
  );
};
