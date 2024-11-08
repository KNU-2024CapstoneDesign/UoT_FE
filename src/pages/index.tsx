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

export const HomePage = () => {
  return (
    <>
      <Wrapper>
        <TitleText fontSize='3x1' as='b'>
          서비스를 이용할 대상을 선택하세요
        </TitleText>
        <TypeWrapper>
          <Link to={RouterPath.loginHolder}>
            <CardWrapper>
              <CardBody>
                <CardTitle>
                  Holder 사용자
                </CardTitle>
              </CardBody>
            </CardWrapper>
          </Link>
          <Link to={RouterPath.loginVerifier}>
            <CardWrapper>
              <CardBody>
                <CardTitle>
                  Verifier 기관
                </CardTitle>
              </CardBody>
            </CardWrapper>
          </Link>
        </TypeWrapper>
      </Wrapper>
    </>
  )
}