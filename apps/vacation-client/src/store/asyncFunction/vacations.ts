import { setLikedVacations, setMoreVac, setVacations } from "../reducers/vacationsReducer";
import { addLike, getLikedVacations, getVacations } from "../services/vacationsService";
import { store } from "..";
import { setRole } from "../reducers/loginRducer";
import { setLoader } from "../reducers/loaderReducer";
import { updateModal } from "./helper";



export async function getVacationsAction(moreVac: number) {
  
    try {
      if (moreVac === 1){
      store.dispatch(setLoader(true))
      const result:any = await getVacations(moreVac);
      if (result.message !== "success"){
        updateModal(result.message, "get vacations")
      }
        store.dispatch(setVacations(result.vacations))
        store.dispatch(setRole(result.role))
      }
      else{
        const result:any = await getVacations(moreVac);
        console.log(result.vacations)
        if (result.message !== "success"){
          updateModal(result.message, "get vacations")
        }
        store.dispatch(setMoreVac(result.vacations))
      }
      
    } catch (error) {
      updateModal("something went wrong, please contact liad", "get vacations")
      } finally{ 
      store.dispatch(setLoader(false))
   }
}

export async function getLikedVacationAction() {
  try {
  console.log("inside likedVacations action")
  let result:any = await getLikedVacations();
  const newResult = result.map((r:any)=>{return r.id})
  console.log("newResult")
  console.log(newResult)
  store.dispatch(setLikedVacations(newResult))
  } catch (error) {
    updateModal("something went wrong, please contact liad", "get like vacations")
  } finally{
}
}


export async function addLikeAction(id: number , likeOrUnlike: boolean) {

  try {
    store.dispatch(setLoader(true))
    console.log(`-----inside like action:  ${likeOrUnlike}`)
    const result:any = await addLike(id , likeOrUnlike);
    console.log(result)
    if(likeOrUnlike){
      updateModal("like added", "add like vacations")

    }else{
      updateModal("like remove", "add like vacations")

    }

    const newResult = result.map((r:any)=>{return r.id})
    store.dispatch(setLikedVacations(newResult))
  } catch (error) {
    alert(error)
      // updateModal( error as string, "add like vacations")
} finally{
    store.dispatch(setLoader(false))
}
}

