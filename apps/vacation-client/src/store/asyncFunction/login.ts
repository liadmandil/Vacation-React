import { store } from "..";
import { clearTokenLS, getTokenLS } from "../reducers/helpers/localStorage";
import { setLoader } from "../reducers/loaderReducer";
import { setToken } from "../reducers/loginRducer";
import { setError, setHeader, setModal } from "../reducers/modalReducer";
import axiosInstance from "../services/index.axios";
import { getLogin, getLogout } from "../services/loginService";
import { updateModal } from "./helper";


export default async function getLoginAction(userName: string , password: string) {
  
    try {
      store.dispatch(setLoader(true))
      console.log("inside login action")
      const result = await getLogin({ userName, password });
        store.dispatch(setToken(result.token));
      
  } catch (error) {
    updateModal("something went wrong, please contact liad ", "login")

  } finally{
        store.dispatch(setLoader(false))
  }
}

export  async function logOutAsync() {
  
  try {
    store.dispatch(setLoader(true))
    console.log("inside logout action")
    const result = await getLogout();
    if (result.message !== "success"){
      updateModal(result.message, "logout")
    }
    console.log("after logout servise " + result)
    const OldToken = getTokenLS()
    clearTokenLS(OldToken as string);
} catch (error) {
    updateModal("something went wrong, please contact liad ", "logout")
} finally{
      store.dispatch(setLoader(false))
}
}

export async function checkTokenExpireVacation(){
  const currentToken = getTokenLS()
  if (!currentToken) return false
     try{
      const { data } = await axiosInstance.get("/auth/checkVarify");
      console.log(data.message)
      return true
     }
     catch(ex){
      console.log("errorrrrrrrrrrrrrrrrrrrrr")
      const OldToken = getTokenLS()
      clearTokenLS(OldToken as string)
      return false
     }
}