import { store } from "..";
import { setLoader } from "../reducers/loaderReducer";
import { setToken } from "../reducers/loginRducer";
import { getRegister, INewUserClient } from "../services/registretionService";
import { updateModal } from "./helper";

export default async function getRegistretionAction(user: INewUserClient ) {
  
    try {
    store.dispatch(setLoader(true))  
    console.log("inside registretion action")
    const result = await getRegister(user);
    if (result.message !== "success"){
      updateModal(result.message, "registration")
    }
    console.log("after registretion servise " + result.token)
    store.dispatch(setToken(result.token));
  } catch (error) {
    updateModal("something went wrong, please contact liad", "registration")
  } finally{
    store.dispatch(setLoader(false))
  }
}