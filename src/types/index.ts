export interface SignUpData {
  walletAddress: string;
  password: string;
  name: string;
}

export interface LoginData {
  walletAddress: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setAuth: (auth: { isAuthenticated: boolean }) => void;
}

export interface RequestVcData {
  holderDid: string;
  issuerId: number;
  requireData: {
    [key: string]: string; // 가변 길이 키-값 쌍을 허용
  };
}

export interface IssuerResponse {
  id: number;
  name: string;
  requireData: string[];
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
  vcIds: number[];
}

export interface VerfierResponse {
  id: number;
  name: string;
}

export interface VPResponse {
  id: number;
  name: string;
  vcList: VCResponse[];
}
