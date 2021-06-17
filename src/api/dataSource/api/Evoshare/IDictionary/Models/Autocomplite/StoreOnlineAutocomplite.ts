

export default class StoreOnlineAutocomplite  {
	Id: number = 0;
	Name?: string = '';
	ComissionInfo?: string = '';
	constructor(obj?: Partial<StoreOnlineAutocomplite>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
