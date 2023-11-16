export type SignUpBody = {
  email: string;
  password: string;
};

export type SignInBody = SignUpBody;

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};
