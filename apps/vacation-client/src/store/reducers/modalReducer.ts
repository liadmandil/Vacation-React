import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ModalState {
  isOpen: boolean,
  message: string,
  header: string
}

const initialState: ModalState = {
    isOpen: false,
    message: "",
    header: ""
};

export const modalSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setModal: (state: ModalState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setError: (state: ModalState, action: PayloadAction<string>) => {
        state.message = action.payload;
      },
    setHeader: (state: ModalState, action: PayloadAction<string>) => {
      state.header = action.payload;
    },

  },
});

export const {  setModal, setError, setHeader } = modalSlice.actions;
export default modalSlice.reducer;
