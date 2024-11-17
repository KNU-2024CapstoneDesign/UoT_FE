import { LoginData } from '@/types';
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react';
import { Wrapper, TitleWrapper, StyledTitleText, FormWrapper, StyledLogoText } from '@/pages/Holder/Auth/SignUpHolder.styles';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SignupButton } from '@/components/Auth/SignupButton';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import { RouterPath } from '@/routes/path';


export const VerifierLoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useLogin('VERIFIER');
  
  const [ loginData, setLoginData ] = useState<LoginData>({
    walletAddress: '',
    password: '',
  });

  const handleWalletConnect = (walletAddress: string) => {
    setLoginData((prev) => ({
      ...prev,
      walletAddress,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { walletAddress, password } = loginData;
    const dataToLogin = {walletAddress, password };

    await handleLogin(dataToLogin);
    navigate(RouterPath.applicantList);
  };

  const isFormValid = () => {
    return (
      loginData.walletAddress &&
      loginData.password
    );
  };

  return (
    <Wrapper>
      <Link to="/">
        <StyledLogoText></StyledLogoText> {/* 로고 텍스트 추가 */}
      </Link>
      <TitleWrapper>
        <StyledTitleText>Verifier 기관 로그인</StyledTitleText>
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
              value={loginData.password}
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
      <SignupButton type='VERIFIER' />
    </Wrapper>
  );
};