

export default class PlaidApiResponse  {
	IsSuccessful: boolean = false;
	Data?: string = '';
	Message?: string = '';
	constructor(obj?: Partial<PlaidApiResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
