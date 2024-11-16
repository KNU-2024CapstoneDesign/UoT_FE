import { useCertificate } from "@/hooks/useCertificate";
import { Wrapper, Card } from "./VCCard.styles";
import { CertificateResponse, ValidResultResponse } from "@/types";

export const CertificateCard = ({
  applicantId,
  validateData,
  validResultData,
}: {
  applicantId: number;
  validateData: CertificateResponse[]; // Ensure this is the correct type for the data passed as props
  validResultData: ValidResultResponse;
}) => {
  const { certificateData } = useCertificate(applicantId);

  // isValid function to check if certificate data id matches any validResult id
  const isValid = (dataId: number) => {
    console.log('Checking validity for dataId:', dataId, 'Valid IDs:', validResultData?.id);
    return validResultData?.id?.includes(dataId) ?? false;
  };
  

  // Check if certificateData is available
  if (!certificateData || certificateData.length === 0) {
    return <div>No VC data available.</div>; // Handle the case when no certificate data is found
  }

  return (
    <Wrapper style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {/* Certificate Data */}
      <div style={{ flex: 1 }}>
        <h3>Certificate</h3>
        {certificateData.map((data) => (
          <Card
            key={data.id}
            style={{
              border: isValid(data.id) ? "2px solid green" : "2px solid red", // Green if valid, Red if invalid
            }}
          >
            {Object.entries(data).map(([key, value]) => key !== "id" && (
              <p className="card-text" key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </Card>
        ))}
      </div>

      {/* Validate Data */}
      {validateData?.length > 0 && (
        <div style={{ flex: 1 }}>
          <h3>Validate Data</h3>
          {validateData.map((data) => (
            <Card key={data.id}>
              {Object.entries(data).map(([key, value]) => (
                key !== "id" && (
                  <p className="card-text" key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                )
              ))}
            </Card>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default CertificateCard;
