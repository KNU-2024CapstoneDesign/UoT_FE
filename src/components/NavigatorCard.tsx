import { Link, useNavigate } from "react-router-dom";

import {
  TitleWrapper,
  EmojiText,
  CardWrapper,
  CardTitle,
} from './NavigatorCard.styles';

import { CardBody } from "@chakra-ui/react";

export const NavigatorCard = ({
  link,
  title,
  emoji = "🤷‍♂️", // Default emoji value
}: {
  link: string;
  title: string;
  emoji?: string;
}) => {
  const navigate = useNavigate();

  const navigateTo = async () => {
    navigate(link);
  }

  return (
      <CardWrapper onClick={navigateTo}>
        <CardBody>
          <TitleWrapper>
            <CardTitle>
              {title}
            </CardTitle>
          </TitleWrapper>
          <EmojiText>{emoji}</EmojiText>
        </CardBody>
      </CardWrapper>
  );
};