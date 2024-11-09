import { RouterPath } from '@/routes/path';
import {
  Wrapper,
  TitleText,
  TypeWrapper,
} from './index.styles';
import { NavigatorCard } from '@/components/NavigatorCard';

export const HomePage = () => {
  return (
    <Wrapper>
      <TitleText fontSize='3x1' as='b'>
        서비스를 이용할 대상을 선택하세요
      </TitleText>
      <TypeWrapper>
        <NavigatorCard link={RouterPath.loginHolder} title='Holder 사용자' emoji='👫' />
        <NavigatorCard link={RouterPath.loginVerifier} title='Verifier 기관' emoji='🏢' />
      </TypeWrapper>
    </Wrapper>
  )
}