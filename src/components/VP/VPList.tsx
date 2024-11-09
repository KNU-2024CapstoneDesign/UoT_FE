import { Card, Text } from "@chakra-ui/react";
import { useVP } from "@/hooks/useVP";
import {
  VPBox,
  StyledCard,
  StyledDefaultText,
  StyledButton,
  ExpandedWrapper,
} from "./VPList.styles";
import { useState } from "react";
import { validateVP } from "@/api/VP/validateVP";

export const VPList = () => {
  const { vpList } = useVP();
  const [validatedIds, setValidatedIds] = useState<number[]>([]);

  // 각 VP에 대해 펼침 상태 관리
  const [expandedState, setExpandedState] = useState<{ [key: number]: boolean }>({});

  const handleVerifier = async (id: string) => {
    try {
      const response = await validateVP(id);
      if (response && response.id) {
        setValidatedIds(response.id);
      }
      console.log("Verification successful");
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  // 특정 VP 항목의 펼침 상태 토글
  const toggleExpand = (id: number) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <StyledCard>
      {vpList.length === 0 ? (
        <StyledDefaultText>제출된 자격 증명이 없습니다.</StyledDefaultText>
      ) : (
        vpList.map((vp) => (
          <VPBox key={vp.id}>
            <Text>
              {vp.id}번: {vp.name} 지원자
            </Text>
            <StyledButton onClick={() => handleVerifier(String(vp.id))}>
              검증 확인
            </StyledButton>
            <button onClick={() => toggleExpand(vp.id)}>
              {expandedState[vp.id] ? "모아보기" : "펼쳐보기"}
            </button>
            {expandedState[vp.id] && (
              <ExpandedWrapper>
                {vp.vcList?.map((data) => (
                  <Card
                    key={data.id}
                    style={{
                      backgroundColor: validatedIds.includes(data.id) ? "green" : "red",
                      color: "white",
                      marginBottom: "10px", // Add some spacing between cards
                    }}
                  >
                    {/* 각 key-value 쌍을 렌더링 */}
                    {Object.entries(data.credentialSubject).map(
                      ([key, value]) =>
                        key !== "id" && (
                          <p className="card-text" key={key}>
                            <strong>{key}:</strong> {String(value)}
                          </p>
                        )
                    )}
                  </Card>
                ))}
              </ExpandedWrapper>
            )}
          </VPBox>
        ))
      )}
    </StyledCard>
  );
};
