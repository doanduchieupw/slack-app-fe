import axiosInstance from "@utils/axios";
import { AuthToken, SignInRequest, SignUpRequest } from "types/auth";

export const signup = async (body: SignUpRequest) => {
  const { data } = await axiosInstance.post<AuthToken>(
    "/api/auth/register",
    body
  );
  return data;
};

export const signin = async (body: SignInRequest) => {
  const { data } = await axiosInstance.post<AuthToken>("/api/auth/login", body);
  return data;
};

export const refreshToken = async () => {
  const { data } = await axiosInstance.get<AuthToken>("/api/auth/refresh");
  return data;
};
