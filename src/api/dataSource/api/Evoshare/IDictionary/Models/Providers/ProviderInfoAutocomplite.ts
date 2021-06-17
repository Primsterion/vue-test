

export default class ProviderInfoAutocomplite  {
	Id: number = 0;
	ProviderName?: string = '';
	ProviderUrl?: string = '';
	constructor(obj?: Partial<ProviderInfoAutocomplite>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
