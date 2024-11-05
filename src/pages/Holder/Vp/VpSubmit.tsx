import React, { useState } from 'react';
import { Wrapper, Card } from './VpSubmit.styles';
import { VCResponse } from "@/types";
import { useLocation } from 'react-router-dom';
import { submitVP } from '@/api/VP/submitVP';
import { VPRequest } from '@/types';

export const VpSubmitPage = () => {
  const location = useLocation();
  const vcs = location.state?.vcs;

  const [ vpRequest, setVPRequest ] = useState<VPRequest>({
    walletAddress: '',
    password: '',
    name: '',
  });

  if (!vcs || vcs.length === 0) {
    return <div>No VC data available.</div>;
  }

  const [selectedIssuer, setSelectedIssuer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const vpProof = await createVPProof(vcs.map(data => data.credentialSubject.id));
      const response = await submitVP(selectedIssuer, vpProof, vcs.map(data => data.credentialSubject.id));
      console.log('Submission successful:', response);
    } catch (error) {
      console.error('Error during submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <label htmlFor="issuer-select">제출처 선택:</label>
      <select
        id="issuer-select"
        value={selectedIssuer}
        onChange={(e) => setSelectedIssuer(e.target.value)}
        required
      >
        <option value="" disabled>Select an issuer</option>
        {/* Add your options for issuers here */}
        <option value="issuer1">Issuer 1</option>
        <option value="issuer2">Issuer 2</option>
      </select>

      {vcs.map((data: VCResponse) => (
        <Card key={data.credentialSubject.id || data.issuerName}>
          <h5 className="card-title">{data.issuerName}</h5>
          <p className="card-text">발급일: {data.issuanceDate.split('T')[0]}</p>

          {Object.entries(data.credentialSubject).map(([key, value]) => (
            key !== "id" && (
              <p className="card-text" key={key}>
                <strong>{key}:</strong> {value}
              </p>
            )
          ))}
        </Card>
      ))}

      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : '제출'}
      </button>
    </Wrapper>
  );
};
