import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserEntity } from "src/app/utils/types/user.type";

export const RegistrationApiActions = createActionGroup({
   source: 'Registration/API',
   events: {
    'Confirm Success': props<{users: UserEntity[]}>(),
    'Confirm Failure': props<{ errorMessage: string }>()
   }
})