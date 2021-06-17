

export default class ProviderInfo  {
	Id: number = 0;
	ProviderName?: string = '';
	ProviderUrl?: string = '';
	PhoneContactInfo?: string = '';
	PayToTheOrderOf?: string = '';
	IsConfirm: boolean = false;
	constructor(obj?: Partial<ProviderInfo>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
