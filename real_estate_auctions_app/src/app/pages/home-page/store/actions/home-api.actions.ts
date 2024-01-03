import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AppImage } from "src/app/utils/types/image.interface";

export const HomeApiActions = createActionGroup({
   source: 'Home/API',
   events: {
    'Load Images Success': props<{images: Array<AppImage>}>(),
    'Load Images Failure': props<{ errorMessage: string}>()
   }
})