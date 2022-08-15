import { PlaylistAddOutlined } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenLS, setTokenLS } from "./helpers/localStorage";
const {ROLE_ADMIN} = process.env



interface registerState {
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  
  errors: Array<string>

}

const initialState: registerState = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    errors: [] 
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {

    setFirstName: (state: registerState, action: PayloadAction<string>) => {
        console.log(action.payload)
      state.firstName = action.payload;
    },
    setLastName: (state: registerState, action: PayloadAction<string>) => {
        state.lastName = action.payload;
    },
    setUserName: (state: registerState, action: PayloadAction<string>) => {
        console.log(action.payload)
        state.userName = action.payload;
    },
    setPassword: (state: registerState, action: PayloadAction<string>) => {
        state.password = action.payload;
      },



    addError: (state: registerState, action: PayloadAction<string>) => {
      state.errors.push(action.payload);
    },
    removeError: (state: registerState, action: PayloadAction<string>) => {
        state.errors = state.errors.filter((er)=>{return er !== action.payload as string})
    },
    

  },
});

export const {setFirstName , setLastName , setUserName , setPassword , addError , removeError} = registerSlice.actions;
export default registerSlice.reducer;
