export type SignUpRequest = {
  email: string;
  password: string;
};

export type SignInRequest = SignUpRequest;

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};
