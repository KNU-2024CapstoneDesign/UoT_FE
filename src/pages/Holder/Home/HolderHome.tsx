import { RouterPath } from '@/routes/path';
import { CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  TitleText,
  TypeWrapper,
  CardWrapper,
  CardTitle,
} from './HolderHome.styles';

export const HolderHomePage = () => {
  return  (
      <Wrapper>
        <TitleText fontSize='3x1' as='b'>
          증명서를 발급받거나 기존 증명서를 확인하세요
        </TitleText>
        <TypeWrapper>
          <CardWrapper>
            <Link to={RouterPath.requestVc}>
              <CardBody>
                <CardTitle>
                  증명서 발급
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to={RouterPath.myVc}>
              <CardBody>
                <CardTitle>
                  발급받은 증명서 관리
                </CardTitle>
              </CardBody>
            </Link>
          </CardWrapper>
        </TypeWrapper>
      </Wrapper>
  );
};