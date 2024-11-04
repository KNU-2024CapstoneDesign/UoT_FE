import { HolderLoginData } from '@/types';
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react';
import { Wrapper, TitleWrapper, StyledTitleText, StyledConnectWalletText, FormWrapper } from '@/pages/Holder/Auth/SignUpHolder.styles';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';

export const HolderLoginPage = () => {
  const { handleLogin } = useLogin();
  
  const [ holderLoginData, setHolderLoginData ] = useState<HolderLoginData>({
    walletAddress: '',
    password: '',
  });

  const handleWalletConnect = (walletAddress: string) => {
    setHolderLoginData((prev) => ({
      ...prev,
      walletAddress,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setHolderLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { walletAddress, password } = holderLoginData;
    const dataToLogin = {walletAddress, password };

    await handleLogin(dataToLogin);
  };

  const isFormValid = () => {
    return (
      holderLoginData.walletAddress &&
      holderLoginData.password
    );
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledTitleText>사용자 로그인</StyledTitleText>
      </TitleWrapper>
      <TitleWrapper>
        <ConnectWalletButton onWalletConnect={handleWalletConnect} />
      </TitleWrapper>
      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id="password" isRequired>
            <FormLabel>비밀번호</FormLabel>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              focusBorderColor="#FF1658"
              mb="10px"
              value={holderLoginData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            bg="#FF1658"
            color="#F5F5F5"
            _hover={{ bg: '#FF467E' }}
            size="md"
            mt="24px"
            type="submit"
            isDisabled={!isFormValid()} // Disable if form is invalid
          >
            로그인
          </Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};