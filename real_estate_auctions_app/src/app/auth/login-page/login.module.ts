import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from './login.component';
import { LoginEffects } from './store/effect/login.effects';
import { loginFeature } from './store/reducers/login.reducer';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
]

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(loginFeature),
    EffectsModule.forFeature([LoginEffects])

  ],
  providers:[
    AuthService,
  ]
})
export class LoginModule { }
