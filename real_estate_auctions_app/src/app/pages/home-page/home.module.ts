import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { ApiService } from 'src/app/api-services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeEffects } from './store/effects/home.effects';
import { homeFeature } from './store/reducer/home.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [{
  path: '',
  component: HomePageComponent
}
]

@NgModule({
  declarations: [HomePageComponent, RealEstateCardComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(homeFeature),
    EffectsModule.forFeature([HomeEffects])
  ],
  providers: [ApiService]
})
export class HomeModule { }
