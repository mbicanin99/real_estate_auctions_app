import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../../services/auth.service"
import { RegistrationApiActions } from "../actions/registration-api.actions";
import { RegistrationActions } from "../actions/registration.actions";

@Injectable()
export class RegistrationEffects{

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}

  confirm$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(RegistrationActions.confirm),
    mergeMap(({firstName, lastName, email, password, role}) => 
      this.authService.registerUser(firstName, lastName, email, password, role).pipe(
        tap(()=>console.log("usao sam u effect")),
        map((users) => RegistrationApiActions.confirmSuccess({users:users})),
        catchError(error => of(RegistrationApiActions.confirmFailure({ errorMessage: error.message })))
      )
    )
  )
);
}