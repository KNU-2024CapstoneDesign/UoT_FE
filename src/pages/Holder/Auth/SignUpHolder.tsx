import { useNavigate } from 'react-router-dom';
import { useSignUp } from '@/hooks/useSignUp';
import { HolderSignUpData } from '@/types';
import { useState, useEffect } from 'react';
import { Divider, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, StyledTitleText, StyledConnectWalletText, FormWrapper } from '@/pages/Holder/Auth/SignUpHolder.styles';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';

export const HolderSignUpPage = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSignUp } = useSignUp();

  const [holderSignUpData, setHolderSignUpData] = useState<HolderSignUpData>({
    walletAddress: '',
    password: '',
    name: '',
  });

  const handleWalletConnect = (walletAddress: string) => {
    setHolderSignUpData((prev) => ({
      ...prev,
      walletAddress,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setHolderSignUpData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleInputConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { walletAddress, name } = holderSignUpData;
    const password = confirmPassword; // Use confirmed password
    const dataToSignUp = { walletAddress, password, name };

    const isSignupSuccessful = await handleSignUp(dataToSignUp);
    if (isSignupSuccessful) {
      navigate('/login-holder'); // Navigate to login on success
    }
  };

  // Check if passwords match and set error message if they don't
  useEffect(() => {
    if (holderSignUpData.password && confirmPassword) {
      setErrorMessage(
        holderSignUpData.password === confirmPassword ? '' : 'Passwords do not match. Please try again.'
      );
    }
  }, [holderSignUpData.password, confirmPassword]);

  // Validate if the form fields are filled and passwords match
  const isFormValid = () => {
    return (
      holderSignUpData.walletAddress &&
      holderSignUpData.name &&
      holderSignUpData.password &&
      holderSignUpData.password === confirmPassword
    );
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledTitleText>사용자 회원가입</StyledTitleText>
      </TitleWrapper>
      <TitleWrapper>
        <StyledConnectWalletText>회원가입을 위해 MetaMask 전자지갑을 연동해주세요.</StyledConnectWalletText>
      </TitleWrapper>
      <TitleWrapper>
        <ConnectWalletButton onWalletConnect={handleWalletConnect} />
      </TitleWrapper>

      <Divider />

      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id="password" isRequired>
            <FormLabel>비밀번호</FormLabel>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              focusBorderColor="#FF1658"
              mb="10px"
              value={holderSignUpData.password}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id="passwordConfirm" isRequired>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              focusBorderColor="#FF1658"
              mb="10px"
              value={confirmPassword}
              onChange={handleInputConfirmPasswordChange}
            />
          </FormControl>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <FormControl id="name" isRequired>
            <FormLabel>이름</FormLabel>
            <Input
              type="text"
              placeholder="이름을 입력해주세요"
              focusBorderColor="#FF1658"
              mb="10px"
              value={holderSignUpData.name}
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
            회원가입
          </Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};
