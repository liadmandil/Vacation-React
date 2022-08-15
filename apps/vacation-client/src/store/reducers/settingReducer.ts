import { PlaylistAddOutlined } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVacation } from "../services/vacationsService";
import { getTokenLS, setTokenLS } from "./helpers/localStorage";
const {ROLE_ADMIN} = process.env



interface settingState {
  description: string,
  destination: string,
  image: string,
  from_date: string,
  to_date: string,
  price: string,
  currentVac: any


  
  errors: Array<string>

}

const initialState: settingState = {
    description :"",
    destination : "",
    image : "",
    from_date : "",
    to_date : "",
    price : "",
    errors: [] ,
    currentVac: null
};

export const settingSlice = createSlice({
  name: "register",
  initialState,
  reducers: {

    setDescription: (state: settingState, action: PayloadAction<string>) => {
        console.log(action.payload)
      state.description = action.payload;
    },
    setDestination: (state: settingState, action: PayloadAction<string>) => {
        state.destination = action.payload;
    },
    setImage: (state: settingState, action: PayloadAction<string>) => {
        state.image = action.payload;
    },
    setFromDate: (state: settingState, action: PayloadAction<string>) => {
        state.from_date = action.payload;
    },
    setToDate: (state: settingState, action: PayloadAction<string>) => {
        state.to_date = action.payload;
    },
    setPrice: (state: settingState, action: PayloadAction<string>) => {
        state.price = action.payload;
    },
    addErrorSettings: (state: settingState, action: PayloadAction<string>) => {
      state.errors.push(action.payload);
    },
    removeErrorSettings: (state: settingState, action: PayloadAction<string>) => {
        state.errors = state.errors.filter((er)=>{return er !== action.payload as string})
    },
    clearForm: (state: settingState) => {
        state = initialState;
    },
    setCurrentVacation: (state: settingState, action: PayloadAction<string>) => {
      state.currentVac = action.payload;
  },
    setDescriptionVac: (state: settingState, action: PayloadAction<string>) => {
        console.log(action.payload)
      state.currentVac.description = action.payload;
    },
    setDestinationVac: (state: settingState, action: PayloadAction<string>) => {
        state.currentVac.destination = action.payload;
    },
    setImageVac: (state: settingState, action: PayloadAction<string>) => {
        state.currentVac.image = action.payload;
    },
    setFromDateVac: (state: settingState, action: PayloadAction<string>) => {
        state.currentVac.from_date = action.payload;
    },
    setToDateVac: (state: settingState, action: PayloadAction<string>) => {
        state.currentVac.to_date = action.payload;
    },
    setPriceVac: (state: settingState, action: PayloadAction<string>) => {
        state.currentVac.price = action.payload;
    },


  },
});

export const {setDescription , setDestination , setImage
   , setFromDate , setToDate , setPrice , addErrorSettings
    , removeErrorSettings , clearForm , setCurrentVacation,
    setDescriptionVac, setDestinationVac, setImageVac,
    setFromDateVac, setToDateVac, setPriceVac
  } = settingSlice.actions;
export default settingSlice.reducer;
