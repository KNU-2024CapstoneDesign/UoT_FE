import { RouterPath } from '@/routes/path';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './VCSubmitButton.styles';

export const VCSubmitButton = ({
  onClick,
  disabled,
} : {
  onClick?: () => void; // Specify the type for onClick
  disabled: boolean;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the passed click handler
    } else {
      navigate(RouterPath.sendVP); // Fallback navigation if no handler is provided
    }
  };
  return (
    <StyledButton type='button' onClick={handleClick} disabled={disabled}>
      증명서 제출
    </StyledButton>
  );
};