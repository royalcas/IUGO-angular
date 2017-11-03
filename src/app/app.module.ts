import { GeneralModule } from './general/general.module';
import { SharedModule } from './shared/shared.module';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
	MatNativeDateModule,
	MatInputModule,
	MatSidenavModule,
	DateAdapter
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		MatCardModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatMenuModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatButtonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatInputModule,
		MatNativeDateModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		CoreModule,
		FormsModule,
		SharedModule,
		GeneralModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
