import { Text, Input, FormControl, FormLabel, Select, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper } from './RequestVc.styles';
import { RequestVcData } from '@/types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import { useVcRequest } from '@/hooks/useVcRequest';
import { useIssuer } from '@/hooks/useIssuer';

export const RequestVcPage = () => {
  const navigate = useNavigate();
  const { handleRequestVc } = useVcRequest();
  const { issuers } = useIssuer();

  const [requestVcData, setRequestVcData] = useState<RequestVcData>({
    holderDid: '',
    issuerId: 0,
    stdId: 0,
  });

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
    const { value } = e.target;
    setRequestVcData((prev) => ({
      ...prev,
      issuerId: Number(value), // issuerId로 변경
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRequestVcData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRequestVc(requestVcData);
    navigate(RouterPath.holderHome);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
          졸업 및 재학 증명서 발급 요청
        </Text>
      </TitleWrapper>
      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id='issuerId' isRequired>
            <FormLabel>발급처</FormLabel>
            <Select
              placeholder='발급처를 선택하세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={requestVcData.issuerId} // issuerId로 상태 확인
              onChange={handleSelectChange}
            >
              {Array.isArray(issuers) && issuers.length > 0 ? (
                issuers.map((issuer) => (
                  <option key={issuer.id} value={issuer.id}>
                    {issuer.name}  {/* 발급처 이름으로 렌더링 */}
                  </option>
                ))
              ) : (
                <option disabled>발급처를 불러오는 중입니다...</option>
              )}
            </Select>
          </FormControl>

          <FormControl id='stdId' isRequired>
            <FormLabel>학번</FormLabel>
            <Input
              type='number'
              placeholder='학번을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              onChange={handleInputChange}
            />
          </FormControl>
        </FormWrapper>
        <Button type='submit' colorScheme='teal' mt='10px'>
          제출
        </Button>
      </form>
    </Wrapper>
  );
};
