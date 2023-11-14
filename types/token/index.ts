export type UserToken = {
  userId: string;
  workspaceId: string;
  roleId: number;
};

export type Token = {
  email: string;
  user: UserToken[];
  iat: number;
  exp: number;
};
