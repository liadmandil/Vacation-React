import { IVacationSetting } from "../asyncFunction/settings";
import axiosInstance from "./index.axios";






export async function getCurrentV(id: number): Promise<any> {
    console.log("inside login service")
    const { data } = await axiosInstance.post("/settings/currentvac", {id});
    return data;
}

export async function addVacation(vacation: IVacationSetting): Promise<any> {
    console.log("inside login service")
    const { data } = await axiosInstance.post("/settings/add", vacation);
    return data;
}

export async function deleteVacation(id: number): Promise<any> {
    console.log("inside delete service")
    const { data } = await axiosInstance.post("/settings/delete", {id});
    return data;
}

export async function getAllLikedS(): Promise<any> {
    console.log("inside allLiked service")
    const { data } = await axiosInstance.get("/settings/stats");
    console.log("after stats service")
    return data;
}

export async function editVac(id: number , vacation: any){
    const { data } = await axiosInstance.post("/settings/edit", {
        id,
        vacation
    });
    console.log("after stats service")
    return data;
}