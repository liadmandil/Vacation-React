import axiosInstance from "./index.axios";

export interface ILoginPayload {
  userName: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  message: string;
}
export async function getLogin(payload: ILoginPayload): Promise<ILoginResponse> {
    console.log("inside login service")
    const { data } = await axiosInstance.post("/auth/login", payload);
    return data;
}

export async function getLogout(): Promise<any> {
  console.log("inside logout service")
  const { data } = await axiosInstance.get("/auth/logout");
  return data;
}



