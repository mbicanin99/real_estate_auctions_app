import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {  EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderModule } from './core/layout/header/header-auth/header.module';
import { AuthComponent } from './auth/auth.component';
import { HeaderAppModule } from './core/layout/header/header-app/header-app.module';
import { PagesComponent } from './pages/pages.component';
import { FooterModule } from './core/layout/footer/footer.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, PagesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    HeaderModule,
    HeaderAppModule,
    FooterModule
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
