import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IUserEntity, IUserLoginPayload, IUserLoginResponse } from "@interfaces/services/auth";

class AuthService {
    private baseUrl: string;
    private clientInstance: AxiosInstance;

    constructor() {
        this.baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api/auth`;
        this.clientInstance = axios.create();
    }

    public login (payload: IUserLoginPayload): Promise<IUserLoginResponse> {
        return new Promise((resolve, reject) => {
            this.clientInstance.post(`${this.baseUrl}/login`, payload).then((response: AxiosResponse<IUserLoginResponse>) => {
                resolve(response.data);
            }).catch((e: Error) => {
                reject(e);
            });
        });
    }

    public register (payload: IUserEntity): Promise<IUserEntity> {
        return new Promise((resolve, reject) => {
            this.clientInstance.post(`${this.baseUrl}/register`, payload).then((response: AxiosResponse<IUserEntity>) => {
                resolve(response.data);
            }).catch((e: Error) => {
                reject(e);
            });
        });
    }

    public logout (): Promise<void> {
        return new Promise((resolve, reject) => {
            this.clientInstance.post(`${this.baseUrl}/logout`).then((response: AxiosResponse) => {
                resolve();
            }).catch((e: Error) => {
                reject(e);
            });
        });
    }
}

const authService = new AuthService();

export default authService;