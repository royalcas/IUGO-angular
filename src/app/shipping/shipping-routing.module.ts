import { CreateShippingComponent } from './create-shipping/create-shipping.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const administrationRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'create',
				component: CreateShippingComponent,
			}/*
			{
				path: 'new-route',
				component: TestComponent
			}
			*/
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(administrationRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ShippingRoutingModule { }