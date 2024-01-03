import { createActionGroup, emptyProps, props } from "@ngrx/store"

export const HomeActions = createActionGroup( {
    source: 'Home',
    events: {
        'Load Images': props<{numberOfRealEstates: number}>(),
    }
});