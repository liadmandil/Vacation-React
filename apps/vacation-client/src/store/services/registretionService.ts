import axiosInstance from "./index.axios";

export interface INewUserClient{
    user_name: string,
    password: string,
    first_name: string,
    last_name: string
}
export interface ILoginResponse {
  token: string;
  message: string;
}
export async function getRegister(payload: INewUserClient): Promise<ILoginResponse> {
    console.log("inside register service")
    const { data } = await axiosInstance.post("/auth/register", payload);
    console.log(data)
    return data;
}



