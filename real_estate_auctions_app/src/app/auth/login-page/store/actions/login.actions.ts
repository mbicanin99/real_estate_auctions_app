import { createActionGroup, props } from "@ngrx/store"

export const LoginActions = createActionGroup( {
    source: 'Login',
    events: {
        'Confirm': props<{email:string, password:string}>(),
    }
});