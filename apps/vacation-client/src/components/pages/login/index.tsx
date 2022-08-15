import { useState, useEffect } from "react";
import css from "../../../app.module.css"
import { Navigate, useNavigate } from "react-router-dom";
import getLoginAction from "../../../store/asyncFunction/login";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { WithLoading } from "../../ui-components/with-loading";
import { clearTokenLS, getTokenLS } from "../../../store/reducers/helpers/localStorage";
import axiosInstance from "../../../store/services/index.axios";

export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loading = useAppSelector((state=>state.loader.isLoading))


  const token = useAppSelector((state)=>state.login.token)


  const dispatch = useAppDispatch();

  async function login() {
    console.log("inside login")
    getLoginAction(userName , password)
  }

  function registration(){
    navigate("/register")
  }

  async function checkTokenExpire(){
     const currentToken = getTokenLS()
     try{
      const { data } = await axiosInstance.get("/auth/checkVarify");
      if(data.message) navigate("/vacations");
     }
     catch(ex){
      console.log("errorrrrrrrrrrrrrrrrrrrrr")
      const OldToken = getTokenLS()
      clearTokenLS(OldToken as string)
     }
  }

  useEffect(() => {
    console.log("useEffect")
   if (typeof token === "string"){
    console.log("inside strings")
    checkTokenExpire()
    }
  }, [ token ])


  return (
    <form className={css.loginform}>
        <WithLoading isLoading={loading}>
          <div>
          <h1>login</h1>
          <div>
              <input type="text" placeholder="user name" onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div>
              <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div>
              <button id="login" onClick={()=>{login()}}>Log In</button>
          </div>
          <div>
              <button id="registration" onClick={()=>{registration()}}>registration</button>
          </div>
          </div>
        </WithLoading>
    </form>
    
  );
}
