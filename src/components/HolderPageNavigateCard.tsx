import { RouterPath } from "@/routes/path";
import { Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { StyledCard } from "./HolderPageNavigateCard.styles";

export const HolderPageNavigateCard = () => {
  const navigate = useNavigate();

  const navigateToHolderPage = () => {
    navigate(RouterPath.holderHome);
  };

  return (
    <Card>
      <StyledCard type='button' onClick={navigateToHolderPage}>
        Holder 페이지로 이동하기
      </StyledCard>
    </Card>
  )
}