import { Error404Component } from './error-pages/error404/error404.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
	CommonModule
  ],
  exports: [
	  Error404Component
  ],
  declarations: [
	Error404Component,
	HeaderComponent,
	NavbarComponent,
	FooterComponent
  ]
})
export class SharedModule { }
