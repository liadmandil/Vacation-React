import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface LoaderState {
  isLoading: boolean,
}

const initialState: LoaderState = {
    isLoading: false
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state: LoaderState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
