import { createFeature, createReducer, on } from "@ngrx/store";
import { RegistrationActions } from "../actions/registration.actions";
import { RegistrationApiActions } from "../actions/registration-api.actions";
import { UserEntity } from "src/app/utils/types/user.type";

export interface RegistrationState{
    users: UserEntity[]|null;
    errorMessage: string|null;
}

export const initialState: RegistrationState = {
    users: null,
    errorMessage:null
}

export const registrationFeature = createFeature({
    name: 'registration',
    reducer: createReducer(
        initialState,
        on(RegistrationActions.confirm, (state, { }) => ({
            ...state,
            errorMessage: null,
        })),
        on(RegistrationApiActions.confirmSuccess, (state, {users}) => ({
            ...state,
            users:users,
            errorMessage: null,
        })),
        on(RegistrationApiActions.confirmFailure, (state, )=>(
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
    selectErrorMessage,
} = registrationFeature