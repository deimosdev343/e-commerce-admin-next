import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { UserData, UserDataPayload } from "../types/AuthTypes";

const initialUserData : UserData = {
  loggedIn: false
}


const userDataSlice = createSlice({
  name:"UserData",
  initialState: initialUserData,
  reducers: {
    loginUser(state, action: PayloadAction<UserDataPayload>) {
      console.log(`payload: ${action.payload}`);
      state = {...action.payload, loggedIn: true};
      return state;
    },
    logoutUser(state) {
      state = {
        loggedIn: false
      }
      return state;
    }
  }
});

export const makeStore = () => {
  return configureStore({
    reducer:{
      userData: userDataSlice.reducer
    }
  })
}

export const {loginUser, logoutUser} = userDataSlice.actions;

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()