import { FlexLayoutModule } from '@angular/flex-layout';
import { ShippingRoutingModule } from './shipping-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	MatInputModule,
	MatSelectModule
} from "@angular/material";

import { CreateComponent } from './create/create.component';
import { CreateShippingComponent } from './create-shipping/create-shipping.component';

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
		MatSelectModule,
		ShippingRoutingModule,
		FormsModule,
		FlexLayoutModule
	],
	declarations: [CreateComponent, CreateShippingComponent]
})
export class ShippingModule { }
