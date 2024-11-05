export interface HolderSignUpData {
  walletAddress: string;
  password: string;
  name: string;
}

export interface HolderLoginData {
  walletAddress: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setAuth: (auth: {
    isAuthenticated: boolean;
  }) => void;
}

export interface RequestVcData {
  holderDid: string;
  issuerId: number;
  stdId: number;
}

export interface IssuerResponse {
  id: number;
  name: string;
}

export interface VCResponse {
  id: number;
  issuerName: string;
  issuanceDate: string;
  credentialSubject: {
    [key: string]: string; // 가변 길이 키-값 쌍을 허용
  };
}

export interface VPRequest {
  verifierId: number;
  vpProof: JSON;
  vc: number[]
}