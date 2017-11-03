import { ShippingRequest } from './../models/shipping-request.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-create-shipping',
	templateUrl: './create-shipping.component.html',
	styleUrls: ['./create-shipping.component.scss']
})
export class CreateShippingComponent implements OnInit {

	locations: string[] = [
		'medellin',
		'manizales',
		'bogota',
		'bucaramanga',
		'barranquilla',
		'pasto',
		'cali',
		'cartagena'
	];

	form: ShippingRequest = new ShippingRequest();

	constructor() { }

	ngOnInit() {
	}

}
