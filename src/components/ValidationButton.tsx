import { StyledButton } from './ValidationButton.styles';
import { useValidate } from '@/hooks/useValidate';
import { useState } from 'react';

export const ValidationButton = ({
  applicantId,
  onValidation,
}: {
  applicantId: number;
  onValidation: (data: any) => void;
}) => {
  const { validateData, fetchValidate } = useValidate(applicantId);
  
  // State to track if validation is complete
  const [isValidationComplete, setIsValidationComplete] = useState(false);

  const handleClick = async () => {
    // Fetch the validation data
    await fetchValidate(applicantId);

    // Once the validation is complete, update the state
    setIsValidationComplete(true);

    // Trigger the onValidation callback with the fetched data
    // Make sure validateData has been updated before passing it
    onValidation(validateData);
  }

  return (
    <div>
      {!isValidationComplete ? (
        <StyledButton type="button" onClick={handleClick}>
          증명서 검증
        </StyledButton>
      ) : (
        <span>증명서 검증 결과</span> // Show the completion text after validation
      )}
    </div>
  );
};
