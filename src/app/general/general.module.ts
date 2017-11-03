import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatMenuModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatInputModule
} from "@angular/material";


import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
	CommonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatMenuModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatInputModule,
	FormsModule
  ],
  declarations: [LoginComponent]
})
export class GeneralModule { }
