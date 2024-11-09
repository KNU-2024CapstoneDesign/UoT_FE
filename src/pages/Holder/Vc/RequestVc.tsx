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
  const [requireData, setRequireData] = useState<string[]>([]);

  // Initialize requireData as an empty object {} to match the expected type { [key: string]: string }
  const [requestVcData, setRequestVcData] = useState<RequestVcData>({
    holderDid: '',
    issuerId: 0,
    requireData: {}, // Initialize as an empty object
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
    const selectedIssuerId = Number(value);
    setRequestVcData((prev) => ({
      ...prev,
      issuerId: selectedIssuerId, // issuerId로 변경
    }));
    const selectedIssuer = issuers.find(issuer => issuer.id === selectedIssuerId);
    if (selectedIssuer) {
      setRequireData(selectedIssuer.requireData); // 선택된 발급처의 requireData를 설정
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRequestVcData((prev) => ({
      ...prev,
      requireData: {
        ...prev.requireData,
        [id]: value, // Update the specific field in requireData
      },
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

          {/* 서버 응답에 따라 동적으로 입력 필드를 렌더링 */}
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
          ) : (
            <Text>발급처의 필수 데이터를 불러오는 중입니다...</Text>
          )}
        </FormWrapper>
        <Button type='submit' colorScheme='teal' mt='10px'>
          제출
        </Button>
      </form>
    </Wrapper>
  );
};
