import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import css from "../../../app.module.css"
import { addVacationAction, editVacationAction, getCurrentVac, IVacationSetting } from "../../../store/asyncFunction/settings"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { addErrorSettings, clearForm, removeErrorSettings, setDescription, setDescriptionVac, setDestination, setDestinationVac, setFromDate, setFromDateVac, setImage, setImageVac, setPrice, setPriceVac, setToDate, setToDateVac } from "../../../store/reducers/settingReducer"
import { IVacation } from "../../../store/services/vacationsService"
import { WithLoading } from "../../ui-components/with-loading"




export function EditVacationPage(){
    const params = useParams()
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state)=>state.loader.isLoading)
    const errors = useAppSelector((state)=>state.setting.errors)
    const currentVacation = useAppSelector((state)=>state.setting.currentVac)



    useEffect(() => {
         getCurrentVac(Number(params.edit)) 
    }, [])


    function editVacation(){
       editVacationAction(Number(params.edit) , currentVacation)
       navigate("/vacations")
       
    }
    function descriptionF(des: string){
      const error = "description- 20-225 letters"
      console.log(errors)
      dispatch(setDescriptionVac(des))
      if (des.length < 20 || des.length > 225){
        if(errors.filter((err)=> err === error).length === 0){
          dispatch(addErrorSettings(error))
          console.log("user.errors")
        }
      }
      else{
        dispatch(removeErrorSettings(error))
      }
    }
    function destinationF(des : string){
      const error = "destination - 4-20 letters"
      dispatch(setDestinationVac(des))
      if (des.length < 3 || des.length > 20){
        if(errors.filter((err)=> err === error).length === 0){
          dispatch(addErrorSettings(error))
          console.log("user.errors")
        }
      }
      else{
        dispatch(removeErrorSettings(error))
      }
    }
    function imageF(img: string){
      dispatch(setImageVac(img))
    }
    function fromF(date: string){
      dispatch(setFromDateVac(date))
    }
    function toF(date: string){
    // onst error = "destination - 4-20 letters"
      // console.log(data.errors)
      dispatch(setToDateVac(date))
    //   if (des.length < 4 || des.length > 20){
    //     if(data.errors.filter((err)=> err === error).length === 0){
    //       dispatch(addErrorSettings(error))
    //       console.log("user.errors")
    //     }
    //   }
    //   else{
    //     dispatch(removeErrorSettings(error))
    //   }
    }
    function priceF(price: string){
      const error = "price - 50 to 5000 dollar"
      dispatch(setPriceVac(price))
      if (Number(price) < 50 ||Number(price) > 5000){
        if(errors.filter((err)=> err === error).length === 0){
          dispatch(addErrorSettings(error))
          console.log("user.errors")
        }
      }
      else{
        dispatch(removeErrorSettings(error))
      }
    }

    return (
            <div style={{marginTop: "50px"}}>
              <h1>add vacation</h1>
              <form className={css.settingsform}>
              <WithLoading isLoading={loading} >
                <div>
                <div>
                  <input type="text" value={currentVacation?.destination} placeholder="destination" onChange={(e)=>{
                    destinationF(e.target.value)}}
                    className={ currentVacation?.destination.length < 3 || currentVacation?.destination.length > 20 ? css.errorInput : ""}/>
                </div>
                <div>
                  <input type="text" value={currentVacation?.description} placeholder="description" onChange={(e)=>{
                    descriptionF(e.target.value)}}
                    className={ currentVacation?.description.length > 225 ? css.errorInput : ""}/>
                </div>
                <div>
                  <input type="text" value={currentVacation?.image} placeholder="image"  onChange={(e)=>{
                    imageF(e.target.value)}}/>
                </div>
                <div>
                  <input type="date" value={currentVacation?.from_date.split("T")[0]} placeholder="from date" onChange={(e)=>{
                    fromF(e.target.value)}}/>    
                </div>
                <div>
                  <input type="date" value={currentVacation?.to_date.split("T")[0]} placeholder="to date" onChange={(e)=>{
                    toF(e.target.value)}}/>             
                </div>
                <div>
                  <input type="number" value={currentVacation?.price} placeholder="price" onChange={(e)=>{
                    priceF(e.target.value)}}
                    className={ Number(currentVacation?.price) < 50 || Number(currentVacation?.price) > 5000 ? css.errorInput : ""} />        
                </div>
                <div>
                    <button style={{visibility: currentVacation?.image.length > 10 && currentVacation?.description.length > 20 &&  currentVacation.destination.length > 3 && Number(currentVacation.price) >= 200 && currentVacation.from_date && currentVacation.to_date? "visible":"hidden"}}
                     onClick={()=>{
                      editVacation()}}>edit</button>
                </div>
                </div>
                </WithLoading>
            </form>
            <div style={{fontSize: "14px" , color: "red" , position: "absolute" , top: "100%" , right: "43%" , zIndex: "4"}}>
              {errors?.map((error)=>{
                return <div>{error}</div>
              })}
            </div>
          </div>
      )
}