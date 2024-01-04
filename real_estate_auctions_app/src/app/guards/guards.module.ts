import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from '../auth/services/auth.service';
import { loginFeature } from '../auth/login-page/store/reducers/login.reducer';
import { LoginEffects } from '../auth/login-page/store/effect/login.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loginFeature),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers:[
    AuthService
  ]
})
export class GuardsModule { }
