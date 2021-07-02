import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IPostEntity } from "@interfaces/services/blog/posts";

class PostService {
    private baseUrl: string;
    private clientInstance: AxiosInstance;

    constructor() {
        this.baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api/blog/posts`;
        this.clientInstance = axios.create();
    }

    public getNews (): Promise<Array<IPostEntity>> {
        return new Promise((resolve, reject) => {
            this.clientInstance.get(`${this.baseUrl}/news`).then((response: AxiosResponse<Array<IPostEntity>>) => {
                resolve(response.data);
            }).catch((e: Error) => {
                reject(e)
            })
        })
    }
}

const postsService = new PostService();

export default postsService;