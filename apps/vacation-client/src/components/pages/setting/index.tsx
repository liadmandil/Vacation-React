import { stat } from "fs";
import { number } from "joi";
import css from "../../../app.module.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import getLoginAction from "../../../store/asyncFunction/login";
import { addVacationAction, IVacationSetting } from "../../../store/asyncFunction/settings";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { IVacation } from "../../../store/services/vacationsService";
import { WithLoading } from "../../ui-components/with-loading";
import { addErrorSettings, clearForm, removeErrorSettings, setDescription, setDestination, setFromDate, setImage, setPrice, setToDate } from "../../../store/reducers/settingReducer";



export function SettingsPage() {
   const loading = useAppSelector((state=>state.loader.isLoading))
   const data = useAppSelector((state=>state.setting))
   const dispatch = useAppDispatch()
   
   
   function addVacation(){
    const vacation: IVacationSetting = {
        description: data.description,
        destination: data.destination,
        image: data.image ,
        from_date: data.from_date ,
        to_date: data.to_date,
        price: Number(data.price)
    }
    console.log(vacation)
      addVacationAction(vacation)
      dispatch(clearForm())  
    }

    function descriptionF(des: string){
      const error = "description- 20-225 letters"
      console.log(data.errors)
      dispatch(setDescription(des))
      if (des.length < 20 || des.length > 225){
        if(data.errors.filter((err)=> err === error).length === 0){
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
      console.log(data.errors)
      dispatch(setDestination(des))
      if (des.length < 3 || des.length > 20){
        if(data.errors.filter((err)=> err === error).length === 0){
          dispatch(addErrorSettings(error))
          console.log("user.errors")
        }
      }
      else{
        dispatch(removeErrorSettings(error))
      }
    }

    function imageF(img: string){
      dispatch(setImage(img))
    }

    function fromF(date: string){
      dispatch(setFromDate(date))
    }

    function toF(date: string){
      dispatch(setToDate(date))
    }

    function priceF(price: string){
      const error = "price - 200 to 5000 dollar"
      console.log(data.errors)
      dispatch(setPrice(price))
      if (Number(price) < 200 ||Number(price) > 5000){
        if(data.errors.filter((err)=> err === error).length === 0){
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
                <input type="text" placeholder="destination" onChange={(e)=>{
                  destinationF(e.target.value)}}
                  className={ data.destination.length < 3 || data.destination.length > 20 ? css.errorInput : ""}/>
              </div>
              <div>
                <input type="text" placeholder="description" onChange={(e)=>{
                  descriptionF(e.target.value)}}
                  className={ data.description.length < 20 || data.description.length > 225 ? css.errorInput : ""}/>
              </div>
              <div>
                <input type="text" placeholder="image"  onChange={(e)=>{
                  imageF(e.target.value)}}/>
              </div>
              <div>
                <input type="date" placeholder="from date" onChange={(e)=>{
                  console.log(e.target.value)
                  fromF(e.target.value)}}/>    
              </div>
              <div>
                <input type="date" placeholder="to date" onChange={(e)=>{
                  toF(e.target.value)}}/>             
              </div>
              <div>
                <input type="number" placeholder="price" onChange={(e)=>{
                  priceF(e.target.value)}}
                  className={ Number(data.price) < 200 || Number(data.price) > 5000 ? css.errorInput : ""} />        
              </div>
              <div>
                  <button style={{visibility: data.image.length > 10 && data.description.length > 20 &&  data.destination.length > 3 && Number(data.price) >= 200 && data.from_date && data.to_date? "visible":"hidden"}}
                   onClick={()=>{
                    addVacation()}}>Add vacation</button>
              </div>
              </div>
              </WithLoading>
          </form>
          <div style={{fontSize: "14px" , color: "red" , position: "absolute" , bottom: "0%" , right: "43%" , zIndex: "4"}}>
            {data.errors?.map((error)=>{
              return <div>{error}</div>
            })}
          </div>
        </div>
    )
}
