import { RouterPath } from '@/routes/path';
import { CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  TitleText,
  TypeWrapper,
  CardWrapper,
  CardTitle,
} from './index.styles';

export const SignupPage = () => {
  return (
    <>
      <Wrapper>
        <TitleText fontSize='3x1' as='b'>
          회원가입 또는 로그인 버튼을 누르세요
        </TitleText>
        <TypeWrapper>
          <CardWrapper>
            <Link to={RouterPath.signupHolder}>
              <CardBody>
                <CardTitle>
                  회원 가입
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to={RouterPath.loginHolder}>
              <CardBody>
                <CardTitle>
                  로그인
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
        </TypeWrapper>
      </Wrapper>
    </>
  )
}