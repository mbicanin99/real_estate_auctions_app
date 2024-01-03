import { createFeature, createReducer, on } from "@ngrx/store";
import { LoginActions } from "../actions/login.actions";
import { LoginApiActions } from "../actions/login-api.actions";
import { UserEntity } from "src/app/utils/types/user.type";

export interface LoginState{
    currentUser: UserEntity | null;
    errorMessage: string|null;
}

export const initialState: LoginState = {
    currentUser: null,
    errorMessage:null
}

export const loginFeature = createFeature({
    name: 'login',
    reducer: createReducer(
        initialState,
        on(LoginActions.confirm, (state, { }) => ({
            ...state,
            errorMessage: null,
        })),
        on(LoginApiActions.confirmSuccess, (state, {currentUser}) => ({
            ...state,
            currentUser: currentUser,
            errorMessage: null,
        })),
        on(LoginApiActions.confirmFailure, (state, )=>(
        {
            ...state,
            errorMessage: "Wrong credentials",
        })),
    )
    }
)

export const{
    name,
    reducer,
    selectCurrentUser,
    selectErrorMessage,
} = loginFeature