import { fetchApi } from "./fetchApi.api";
import {
    GetProfileResponse,
    LoginResponse,
    RegisterResponse,
} from "./responses/auth.interfaces";
import {
    LoginRequestBody,
    RegisterRequestBody,
} from "./requestBodies/auth.interfaces";

export const getProfile = async (): Promise<GetProfileResponse> =>
    fetchApi({
        endpoint: "/auth/profile/",
        isAuthRequired: true,
        method: "GET",
    });

export const login = async (
    credentials: LoginRequestBody,
): Promise<LoginResponse> =>
    fetchApi({ endpoint: "/auth/login/", method: "POST", body: credentials });

export const register = async (
    credentials: RegisterRequestBody,
): Promise<RegisterResponse> =>
    fetchApi({ endpoint: "/users/create", method: "POST", body: credentials });
