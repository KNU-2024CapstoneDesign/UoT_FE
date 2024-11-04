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