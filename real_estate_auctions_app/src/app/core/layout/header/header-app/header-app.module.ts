import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderAppComponent } from './header-app.component';

@NgModule({
  declarations: [HeaderAppComponent],
  exports: [
    HeaderAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class HeaderAppModule { }
