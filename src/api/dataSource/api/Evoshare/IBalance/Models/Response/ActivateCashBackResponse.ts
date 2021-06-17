

export default class ActivateCashBackResponse  {
	TripId?: string = '';
	Url?: string = '';
	constructor(obj?: Partial<ActivateCashBackResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
