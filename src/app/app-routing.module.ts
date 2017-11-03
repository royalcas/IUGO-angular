import { LoginComponent } from './general/login/login.component';
import { Error404Component } from './shared/error-pages/error404/error404.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
	{
		path: 'dispatcher',
		loadChildren: 'app/dispatcher/dispatcher.module#DispatcherModule'
	},
	{
		path: 'admin',
		loadChildren: 'app/administration/administration.module#AdministrationModule'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'general',
		loadChildren: 'app/general/general.module#GeneralModule'
	},
	{
		path: 'shipping',
		loadChildren: 'app/shipping/shipping.module#ShippingModule'
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: Error404Component
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule {
}
