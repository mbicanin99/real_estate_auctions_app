import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';;
import { HomeEffects } from './store/effects/home.effects';
import { homeFeature } from './store/reducer/home.reducer';
import { HomePageComponent } from './home.component';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { ApiService } from 'src/app/api-services/api.service'
import { DescriptionPipes } from 'src/app/pipes/description.pipe';


const routes: Routes = [{
  path: '',
  component: HomePageComponent
}
]

@NgModule({
  declarations: [HomePageComponent, RealEstateCardComponent, DescriptionPipes],
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
