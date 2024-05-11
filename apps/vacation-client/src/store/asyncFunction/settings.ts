import { useDispatch, useSelector } from "react-redux";
import { store } from "..";
import { setLoader } from "../reducers/loaderReducer";
import { setError, setHeader, setModal } from "../reducers/modalReducer";
import { setCurrentVacation } from "../reducers/settingReducer";
import { setLikedVacations, setLikedVacationsObject, setVacations } from "../reducers/vacationsReducer";
import { addVacation, deleteVacation, editVac, getAllLikedS, getCurrentV } from "../services/settingService";
import { updateModal } from "./helper";



export interface IVacationSetting{
    description: string,
    destination: string,
    image: string,
    from_date: any,
    to_date: any,
    price: Number
}



export async function addVacationAction(vacation:IVacationSetting ){
    try {
        store.dispatch(setLoader(true))
        console.log("inside login action")
        const result = await addVacation(vacation);
        if (result.message !== "success"){
          updateModal(result.message, "add vacation")
        }
      } catch (error) {
        updateModal("something went wrong, please contact liad", "add vacation")
      } finally{
          store.dispatch(setLoader(false))
     
      }
}


export async function deleteVacationAction(id: number ){
  try {
      store.dispatch(setLoader(true))
      const result = await deleteVacation(id);
      console.log("after login servise " + result)
      store.dispatch(setVacations(result.vacations));
      updateModal("vacation removed", "delete vacation")

    } catch (error) {
      updateModal("something went wrong, please contact liad", "delete vacation")
    } finally{
      store.dispatch(setLoader(false))
    }
}



export async function getAllLikedVacation(){
  try {
    store.dispatch(setLoader(true));
      console.log("inside liked action")
      const result = await getAllLikedS();
      if (result.message !== "success"){
        updateModal(result.message, "liked vacation")
      }
      store.dispatch(setLikedVacationsObject(result.likedVacations));
    } catch (error) {
      updateModal("something went wrong, please contact liad", "liked  vacation")
    } finally{
      store.dispatch(setLoader(false));
    }
}

export async function getCurrentVac( id: Number){
  try {
    store.dispatch(setLoader(true));
    const result = await getCurrentV(Number(id))
      store.dispatch(setCurrentVacation(result.vacation[0]));
    } catch (error) {
      updateModal("something went wrong, please contact liad", "current vacation")
    } finally{
      store.dispatch(setLoader(false));
    }
}

export async function editVacationAction(id: Number, vacation: any){
  try {
    store.dispatch(setLoader(true));
    const result = await editVac(Number(id) , vacation);
    store.dispatch(setVacations(result.vacations));
    } catch (error) {
      updateModal("something went wrong, please contact liad", "add vacation")
    } finally{
      store.dispatch(setLoader(false));
      updateModal("edit seccuss", "add vacation");

    }
}
