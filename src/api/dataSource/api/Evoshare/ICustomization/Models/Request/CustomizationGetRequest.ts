

export default class CustomizationGetRequest  {
	EmployerId?: string = '';
	Alias?: string = '';
	constructor(obj?: Partial<CustomizationGetRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
