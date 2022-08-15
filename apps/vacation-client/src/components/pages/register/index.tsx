import css  from "../../../app.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import getLoginAction from "../../../store/asyncFunction/login";
import getRegistretionAction from "../../../store/asyncFunction/registretion";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addError, removeError, setFirstName, setLastName, setPassword, setUserName } from "../../../store/reducers/registerReducer";
import { border } from "@mui/system";
import { WithLoading } from "../../ui-components/with-loading";


export function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const token = useAppSelector((state)=>state.login.token)
  const  user = useAppSelector((state)=>state.register)
  const loading = useAppSelector((state)=>state.loader.isLoading)


  function userNameF(n: string){
    const error = "user name need to be at list 5 ch"
    console.log(user.errors)
    dispatch(setUserName(n))
    if (n.length < 5){
      if(user.errors.filter((err)=> err === error).length === 0){
        dispatch(addError(error))
        console.log("user.errors")
      }
    }
    else{
      dispatch(removeError(error))
    }
  }
  function passwordF(pass: string){
    const error = "password need to be at list 5 ch"
    console.log(user.errors)
    dispatch(setPassword(pass))
    if (pass.length < 5){
      if(user.errors.filter((err)=> err === error).length === 0){
        dispatch(addError(error))
        console.log("user.errors")
      }
    }
    else{
      dispatch(removeError(error))
    }
  }
  function firstNameF(pass: string){
    const error = "first name need to be at list 2 ch"
    console.log(user.errors)
    dispatch(setFirstName(pass))
    if (pass.length < 2){
      if(user.errors.filter((err)=> err === error).length === 0){
        dispatch(addError(error))
        console.log("user.errors")
      }
    }
    else{
      dispatch(removeError(error))
    }
  }
  function lastNameF(pass: string){
    const error = "last name need to be at list 2 ch"
    console.log(user.errors)
    dispatch(setLastName(pass))
    if (pass.length < 2){
      if(user.errors.filter((err)=> err === error).length === 0){
        dispatch(addError(error))
        console.log("user.errors")
      }
    }
    else{
      dispatch(removeError(error))
    }
  }
  async function register() {
    console.log("inside login")
    const userN = {
        user_name: user.userName,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName
    }
    getRegistretionAction(userN)
  }
  function toLogin(){
    navigate("/")
  }


  if (typeof token === "string") return <Navigate to="/vacations" />;
  return (
   <WithLoading isLoading={loading}>
       <div>
        <form className={css.registerform}>
          <h1>register</h1>
          <div>
              <input type="text" placeholder="user Name" onChange={(e)=>{
                userNameF(e.target.value)
                }} 
                className={ user.userName.length < 5 && user.userName.length > 0 ? css.errorInput : ""}
              />
          </div>
          <div>
              <input type="text" placeholder="password" onChange={(e)=>{
                passwordF(e.target.value)
                }}
                className={ user.password.length < 5 && user.password.length > 0 ? css.errorInput : ""}
              />
          </div>
          <div>
              <input type="text" placeholder="first name" onChange={(e)=>{
                firstNameF(e.target.value)
                }}
                className={ user.firstName.length < 2 && user.firstName.length > 0 ? css.errorInput : ""}  
              />
          </div>
          <div>
              <input type="text" placeholder="last name" onChange={(e)=>{
                lastNameF(e.target.value)
                }}
                className={ user.lastName.length < 2 && user.lastName.length > 0 ? css.errorInput : ""}  
              />
          </div>
          <div>
              <button onClick={()=>{register()}}>create acount</button>
          </div>
          <div>
              <button onClick={()=>{toLogin()}}>login</button>
          </div>
      </form>
      <div style={{fontSize: "14px" , color: "red" , position: "absolute" , top: "85%" , right: "42%" , zIndex: "4"}}>
        {user.errors?.map((error)=>{
          return <div>{error}</div>
        })}
      </div>
    </div>
  </WithLoading>
  );
}
