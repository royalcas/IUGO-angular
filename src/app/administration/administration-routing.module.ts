import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const administrationRoutes: Routes = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
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
export class AdministrationRoutingModule { }