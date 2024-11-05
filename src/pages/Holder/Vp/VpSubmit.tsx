import React, { useState } from 'react';
import { VCResponse } from "@/types";
import { useLocation } from 'react-router-dom';
import { VPRequest } from '@/types';
import { useNavigate } from 'react-router-dom';
import { Text, Card, FormControl, FormLabel, Select, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper } from './VpSubmit.styles';
import { useSendVP } from '@/hooks/useSendVP';
import { RouterPath } from '@/routes/path';
import { useVerifier } from '@/hooks/useVerifier';

export const VpSubmitPage = () => {
  const location = useLocation();
  const vcs = location.state?.vcs;
  const navigate = useNavigate();
  const { handleSendVP } = useSendVP();
  const initialVcIds = vcs ? vcs.map((data: VCResponse) => data.id) : [];
  const { verfiers } = useVerifier();

  const [ vpRequest, setVPRequest ] = useState<VPRequest>({
    verifierId: 0,
    vcIds: initialVcIds,
  });

  if (!vcs || vcs.length === 0) {
    return <div>No VC data available.</div>;
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log("Selected Verifier ID:", value); // Debugging line
    setVPRequest((prev) => ({
      ...prev,
      verifierId: Number(value),
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSendVP(vpRequest);
    navigate(RouterPath.holderHome);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
          증명서 제출
        </Text>
      </TitleWrapper>
      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id='verifierId' isRequired>
            <FormLabel>제출 기관: </FormLabel>
            <Select
              placeholder='제출처를 선택하세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={vpRequest.verifierId}
              onChange={handleSelectChange}
            >
              {Array.isArray(verfiers) && verfiers.length > 0 ? (
                verfiers.map((verfier) => (
                  <option key={verfier.id} value={verfier.id}>
                    {verfier.name}  {/* 제출처 이름으로 렌더링 */}
                  </option>
                ))
              ) : (
                <option disabled>제출처를 불러오는 중입니다...</option>
              )}
            </Select>
          </FormControl>
        </FormWrapper>
        <Button
          bg='#FF1658'
          color='#F5F5F5'
          _hover={{ bg: '#FF467E' }}
          size='md'
          mt='24px'
          type='submit'
        >
          증명서 제출
        </Button>
      </form>
      <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
        제출할 증명서 목록
      </Text>
      {vcs.map((data: VCResponse) => (
        <Card key={data.credentialSubject.id || data.issuerName}>
          <h5 className="card-title">{data.issuerName}</h5>
          <p className="card-text">발급일: {data.issuanceDate.split('T')[0]}</p>
            {Object.entries(data.credentialSubject).map(([key, value]) => (
            key !== "id" && (
              <p className="card-text" key={key}>
                <strong>{key}:</strong> {value}
              </p>
            )
          ))}
        </Card>
      ))}
    </Wrapper>
  );
};
