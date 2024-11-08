import { Card, Text } from "@chakra-ui/react";
import { useVP } from "@/hooks/useVP";
import {
  VPBox,
  StyledCard,
  StyledDefaultText,
  StyledButton,
} from "./VPList.styles";
import { useState } from "react";
import { validateVP } from "@/api/VP/validateVP";

export const VPList = () => {
  const { vpList } = useVP();
  const [isExpanded, setIsExpanded] = useState(false);
  const [validatedIds, setValidatedIds] = useState<number[]>([]);

  const handleVerifier = async (id: string) => {
    try {
      const response = await validateVP(id);
      if (response && response.validateComplete) {
        setValidatedIds(response.validateComplete);
      }
      console.log("Verification successful");
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

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
            <button onClick={toggleExpand}>
              {isExpanded ? "모아보기" : "펼쳐보기"}
            </button>
            <div style={{ marginTop: "10px" }}>
              {isExpanded &&
                vp.vcList?.map((data) => (
                  <Card
                    key={data.id}
                    style={{
                      backgroundColor: validatedIds.includes(data.id)
                        ? "blue"
                        : "red",
                      color: "white",
                    }}
                  >
                    {Object.entries(data).map(
                      ([key, value]) =>
                        key !== "id" && (
                          <p className="card-text" key={key}>
                            <strong>{key}:</strong> {value}
                          </p>
                        )
                    )}
                  </Card>
                ))}
            </div>
          </VPBox>
        ))
      )}
    </StyledCard>
  );
};
