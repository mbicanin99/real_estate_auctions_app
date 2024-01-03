import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationPageComponent } from './registration.component';
import { AuthService } from '../services/auth.service';
import { registrationFeature } from './store/reducer/registration.reducer';
import { RegistrationEffects } from './store/effect/registration.effect';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPageComponent
  }
]
@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(registrationFeature),
    EffectsModule.forFeature([RegistrationEffects])
  ],
  providers:[
    AuthService
  ]
})
export class RegistrationModule { }
