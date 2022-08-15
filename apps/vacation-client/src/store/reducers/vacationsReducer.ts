import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVacation } from "../services/vacationsService";
import { getTokenLS, setTokenLS } from "./helpers/localStorage";
interface IVacationsState {
  vacations: Array<IVacation> | null,
  likedVacation: Array<any> | null,
  LikedVacationsObject: Array<IVacation> | null,
}

const initialState: IVacationsState = {
  vacations: null,
  likedVacation: null,
  LikedVacationsObject: null
};

export const vacationsSlice = createSlice({
  name: "vacations",
  initialState,
  reducers: {
    setVacations: (state: IVacationsState, action: PayloadAction<Array<any>>) => {
      state.vacations = action.payload;
    },
    setLikedVacationsObject: (state: IVacationsState, action: PayloadAction<any>) => {
      state.LikedVacationsObject = action.payload;
    },
    setLikedVacations: (state: IVacationsState, action: PayloadAction<any>) => {
      state.likedVacation = action.payload;
    },
    setMoreVac: (state: IVacationsState, action: PayloadAction<Array<any>>) => {
      action.payload.map((v)=>{
        state.vacations?.push(v)
      });
    },
    
  },
});

export const { setVacations , setLikedVacations , setLikedVacationsObject , setMoreVac} = vacationsSlice.actions;
export default vacationsSlice.reducer;
