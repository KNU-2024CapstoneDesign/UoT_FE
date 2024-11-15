import { RouterPath } from '@/routes/path';
import {
  Wrapper,
  TitleText,
  TypeWrapper,
    StyledLogoText
} from './HolderHome.styles';
import { NavigatorCard } from '@/components/NavigatorCard';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
export const HolderHomePage = () => {
  return  (
    <Wrapper>
        <Link to="/">
            <StyledLogoText></StyledLogoText> {/* 로고 텍스트 추가 */}
        </Link>
      <TitleText fontSize='3x1' as='b'>
        증명서를 발급받거나 기존 증명서를 확인하세요
      </TitleText>
      <TypeWrapper>
        <NavigatorCard link={RouterPath.requestVc} title='증명서 발급' emoji='📃' />
        <NavigatorCard link={RouterPath.myVc} title='발급받은 증명서 관리' emoji='📂' />
      </TypeWrapper>
    </Wrapper>
  );
};