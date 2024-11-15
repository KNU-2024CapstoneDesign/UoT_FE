import { RouterPath } from '@/routes/path';
import { Wrapper, TitleText, StyledLogoText, IntroductionText, FeatureGrid, FeatureBox, FeatureIcon, FeatureTitle, FeatureDescription, ButtonWrapper } from './index.styles';
import { NavigatorCard } from '@/components/NavigatorCard';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUserCheck, FaLock, FaNetworkWired, FaCertificate, FaSyncAlt } from 'react-icons/fa';

export const HomePage = () => {
    return (
        <Wrapper>
            {/* 로고 텍스트 */}
            <Link to="/">
                <StyledLogoText />
            </Link>

            {/* 서비스 대상 선택 텍스트 */}
            <TitleText as="b">
                서비스를 이용할 대상을 선택하세요
            </TitleText>

            {/* 대상 선택 버튼을 가로로 배열 */}
            <ButtonWrapper>
                <NavigatorCard link={RouterPath.loginHolder} title="Holder 사용자" emoji="👫" />
                <NavigatorCard link={RouterPath.loginVerifier} title="Verifier 기관" emoji="🏢" />
            </ButtonWrapper>

            {/* 프로젝트 소개문 */}
            <IntroductionText>
                DID(Decentralized Identifier)와 블록체인을 이용하여 안전하고 효율적으로 신원과 자격을 증명할 수 있는 시스템을 제공합니다. 사용자들은 위변조 없는 증명서를 관리하고 다양한 기관에서 쉽게 제출할 수 있습니다.
            </IntroductionText>

            {/* 주요 기능 설명 그리드 */}
            <FeatureGrid>
                <FeatureBox>
                    <FeatureIcon as={FaShieldAlt} />
                    <FeatureTitle>보안 강화</FeatureTitle>
                    <FeatureDescription>블록체인의 암호화 기술로 데이터의 무결성과 보안을 보장합니다.</FeatureDescription>
                </FeatureBox>

                <FeatureBox>
                    <FeatureIcon as={FaUserCheck} />
                    <FeatureTitle>자기 주권 신원</FeatureTitle>
                    <FeatureDescription>사용자는 자신의 신원 데이터를 완전히 통제하고, 원하는 정보만을 공유할 수 있습니다.</FeatureDescription>
                </FeatureBox>

                <FeatureBox>
                    <FeatureIcon as={FaLock} />
                    <FeatureTitle>프라이버시 보호</FeatureTitle>
                    <FeatureDescription>사용자가 필요한 정보만을 공유할 수 있어 민감한 정보의 과도한 노출을 방지합니다.</FeatureDescription>
                </FeatureBox>

                <FeatureBox>
                    <FeatureIcon as={FaNetworkWired} />
                    <FeatureTitle>탈중앙화</FeatureTitle>
                    <FeatureDescription>중앙 기관의 개입 없이 개인과 기관 간 직접적인 신원 검증이 가능합니다.</FeatureDescription>
                </FeatureBox>

                <FeatureBox>
                    <FeatureIcon as={FaCertificate} />
                    <FeatureTitle>검증 가능 증명</FeatureTitle>
                    <FeatureDescription>디지털 증명서를 통해 발급자와 검증자가 신뢰할 수 있는 방식으로 자격을 증명할 수 있습니다.</FeatureDescription>
                </FeatureBox>

                <FeatureBox>
                    <FeatureIcon as={FaSyncAlt} />
                    <FeatureTitle>상호 운용성</FeatureTitle>
                    <FeatureDescription>W3C 표준에 기반하여 다양한 플랫폼과 애플리케이션에서 호환이 가능합니다.</FeatureDescription>
                </FeatureBox>
            </FeatureGrid>
        </Wrapper>
    );
};
