import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ApiService } from "src/app/api-services/api.service";
import { HomeActions } from "../actions/home.actions";
import { AppImage } from "src/app/utils/types/image.interface";
import { HomeApiActions } from "../actions/home-api.actions";

@Injectable()
export class HomeEffects{

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ){}

//   confirm$: Observable<Action> = createEffect(() =>
//   this.actions$.pipe(
//     ofType(HomeActions.loadImages),
//     switchMap(({numberOfRealEstates}) => 
//       this.apiService.getRealEstatePhoto(numberOfRealEstates).pipe(
//         tap(()=>console.log("usao sam u effect")),
//         map((images: Array<AppImage>) => HomeApiActions.loadImagesSuccess),
//         catchError(error => of(HomeApiActions.loadImagesFailure({ errorMessage: error.message })))
//       )
//     )
//   )
// );

confirm$ = createEffect(() =>
this.actions$.pipe(
  ofType(HomeActions.loadImages),
  switchMap(({ numberOfRealEstates }) =>
    this.apiService.getRealEstatePhoto(numberOfRealEstates).pipe(
      tap(() => console.log("usao sam u effect")),
      map((images: Array<AppImage>) => HomeApiActions.loadImagesSuccess({ images })),
      catchError(error => of(HomeApiActions.loadImagesFailure({ errorMessage: error.message })))
    )
  )
)
);
}