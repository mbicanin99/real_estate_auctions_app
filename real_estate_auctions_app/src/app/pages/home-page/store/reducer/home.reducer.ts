import { createFeature, createReducer, on } from "@ngrx/store";
import { AppImage } from "src/app/utils/types/image.interface";
import { HomeActions } from "../actions/home.actions";
import { HomeApiActions } from "../actions/home-api.actions";

export interface HomeState{
    images: AppImage[];
    errorMessage: string|null;
}

export const initialState: HomeState = {
    images: [],
    errorMessage:null
}

export const homeFeature = createFeature({
    name: 'home',
    reducer: createReducer(
        initialState,
        on(HomeActions.loadImages, (state, { }) => ({
            ...state,
            errorMessage: null,
        })),
        on(HomeApiActions.loadImagesSuccess, (state, {images }) => ({
            ...state,
            images: images,
            errorMessage: null,
        })),
        on(HomeApiActions.loadImagesFailure, (state, )=>(
        {
            ...state,
            errorMessage: "Images can't be uplaude!",
        })),
    )
    }
)

export const{
    name,
    reducer,
    selectImages,
    selectErrorMessage,
} = homeFeature