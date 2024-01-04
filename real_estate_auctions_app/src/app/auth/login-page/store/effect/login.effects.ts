import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../../services/auth.service"
import { LoginApiActions } from "../actions/login-api.actions";
import { LoginActions } from "../actions/login.actions";
import { UserEntity } from "src/app/utils/types/user.type";

@Injectable()
export class LoginEffects{

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}

  confirm$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LoginActions.confirm),
    mergeMap(({email, password}) => 
      this.authService.loginUser(email, password).pipe(
        tap(()=>console.log("usao sam u effect")),
        map((currentUser: UserEntity) => LoginApiActions.confirmSuccess({currentUser})),
        catchError(error => of(LoginApiActions.confirmFailure({ errorMessage: error.message })))
      )
    )
  )
);
}