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