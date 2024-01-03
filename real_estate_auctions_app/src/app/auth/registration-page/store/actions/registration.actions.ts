import { createActionGroup, props } from "@ngrx/store"
import { Roles } from "src/app/utils/enums/roles.enum";

export const RegistrationActions = createActionGroup( {
    source: 'Registration',
    events: {
        'Confirm': props<{firstName:string, lastName: string, email: string, password: string, role: Roles }>(),
    }
});