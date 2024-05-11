
import { store } from "..";
import { setError, setHeader, setModal } from "../reducers/modalReducer";


export function updateModal(message: string, header: string){
    store.dispatch(setError(message));
    store.dispatch(setHeader(header));
    store.dispatch(setModal(true));
}