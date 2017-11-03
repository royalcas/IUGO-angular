export class ShippingRequest {
	public originId: string;
	public destinationId: string;
	public pickupDate: Date;
	public allocationDeadline: Date;
	public name: string;
	public price: number;
	public comments: string;
}