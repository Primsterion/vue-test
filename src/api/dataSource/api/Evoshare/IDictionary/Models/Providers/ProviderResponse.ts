

export default class ProviderResponse  {
	Id: number = 0;
	constructor(obj?: Partial<ProviderResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
