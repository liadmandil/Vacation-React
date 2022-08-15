import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers/loaderReducer";
import loginRducer from "./reducers/loginRducer";
import modalReducer from "./reducers/modalReducer";
import registerReducer from "./reducers/registerReducer";
import settingReducer from "./reducers/settingReducer";
import vacationsReducer from "./reducers/vacationsReducer";

export const store = configureStore({
  reducer: {
    login: loginRducer,
    vacations: vacationsReducer,
    loader: loaderReducer,
    register: registerReducer,
    setting: settingReducer,
    modal: modalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
