import axios, { AxiosError } from "axios"
import { getTokenLS } from "../reducers/helpers/localStorage"
import { store } from "../index"
const { dispatch } = store
const axiosInstance: any = axios.create({ baseURL: "http://localhost:4100" })
axiosInstance.interceptors.request.use((request: any) => {
    console.log("On every request sent to server!")
    request.headers.authorization = getToken()
    return request;
})

axiosInstance.interceptors.response.use((response: any) => {
    console.log("On every response from  server!")
    return response;
}, (error: AxiosError) => {
    console.log(`On every error response:   ${error}`)
})



function getToken() {
    return getTokenLS()
}
export default axiosInstance



