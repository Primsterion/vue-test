

export default class TerminatedAddressResponse  {
	City?: string = '';
	State?: string = '';
	StreetAddressFirst?: string = '';
	StreetAddressSecond?: string = '';
	PayToTheOrderOf?: string = '';
	ZipCode?: string = '';
	constructor(obj?: Partial<TerminatedAddressResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
