import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserEntity } from "src/app/utils/types/user.type";

export const LoginApiActions = createActionGroup({
   source: 'Login/API',
   events: {
    'Confirm Success': props<{currentUser: UserEntity}>(),
    'Confirm Failure': props<{errorMessage: string}>()
   }
})