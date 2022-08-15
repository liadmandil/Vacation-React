import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenLS, setTokenLS } from "./helpers/localStorage";
const {ROLE_ADMIN} = process.env



interface LoginState {
  token: string | null,
  role: any 
}

const initialState: LoginState = {
  token: getTokenLS(),
  role: "viewer"
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state: LoginState, action: PayloadAction<string>) => {
      console.log("inside login reducer "+ action.payload)
      setTokenLS(action?.payload);
      state.token = action.payload;
    },
    setRole: (state: LoginState, action: PayloadAction<string>) => {
      if(action.payload === "admin"){
        console.log("hello admin")
        state.role = ROLE_ADMIN
      }  
      else{
        state.role = "viewer"
      }
    }
  },
});

export const { setToken , setRole} = loginSlice.actions;
export default loginSlice.reducer;
