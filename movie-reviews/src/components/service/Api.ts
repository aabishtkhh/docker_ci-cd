import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = `http://aabish.uek.dev.noseryoung.ch:28000`; //backend zugreifen
//const BASE_URL = `http://localhost:8080/`; //backend zugreifen


/*damit verweigern wir Redundanz*/
export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

//interceptor: 
defaultAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean = config.url !== "sign-in";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
)