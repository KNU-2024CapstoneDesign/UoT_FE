import React from 'react';
import { useState } from 'react';
import { VCCard } from '@/components/VC/VCCard';
import { VCResponse } from '@/types';
import { Link, useNavigate } from 'react-router-dom';
import {
    Wrapper,
    CardContainer,
    VPProcessContainer,
    VPStage,
    VPArrow,
    SubmitWrapper,
    SelectedCount,
    TitleText
} from './MyVc.styles';
import { Button } from '@chakra-ui/react';
import { StyledLogoText } from "@/pages/Holder/Auth/SignUpHolder.styles";
import { RouterPath } from "@/routes/path";

export const MyVcPage = () => {
    const navigate = useNavigate();
    const [selectedVCs, setSelectedVCs] = useState<VCResponse[]>([]);

    const handleNavigate = () => {
        if (selectedVCs.length === 0) {
            alert('증명서를 최소 하나 선택해주세요.');
            return;
        }
        navigate(RouterPath.sendVP, { state: { vcs: selectedVCs } });
    };

    return (
        <Wrapper>
            <Link to="/">
                <StyledLogoText />
            </Link>

            {/* 페이지 제목 */}
            <TitleText>나의 증명서</TitleText>

            {/* 선택된 증명서 개수 */}
            <SelectedCount>
                선택한 VC 갯수: {selectedVCs.length}개
            </SelectedCount>

            {/* VP 생성 과정 시각화 */}
            <VPProcessContainer>
                <VPStage active={selectedVCs.length > 0}>증명서 선택</VPStage>
                <VPArrow active={selectedVCs.length > 0}>→</VPArrow>
                <VPStage active={selectedVCs.length > 0}>VP 생성</VPStage>
                <VPArrow active={selectedVCs.length > 0}>→</VPArrow>
                <VPStage active={selectedVCs.length > 0}>검증 기관 제출</VPStage>
            </VPProcessContainer>

            {/* 증명서 카드 목록 */}
            <CardContainer>
                <VCCard selectedVCs={selectedVCs} setSelectedVCs={setSelectedVCs} />
            </CardContainer>

            {/* VP 제출 버튼 */}
            <SubmitWrapper>
                <Button
                    bg="#3182ce"
                    color="#fff"
                    _hover={{ bg: "#2b6cb0" }}
                    disabled={selectedVCs.length === 0}
                    onClick={handleNavigate}
                >
                    VP 제출
                </Button>
            </SubmitWrapper>
        </Wrapper>
    );
};
