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
          <CardWrapper>
            <Link to={RouterPath.loginHolder}>
              <CardBody>
                <CardTitle>
                  Holder 사용자
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to={RouterPath.loginVerifier}>
              <CardBody>
                <CardTitle>
                  Verifier 기관
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
        </TypeWrapper>
      </Wrapper>
    </>
  )
}