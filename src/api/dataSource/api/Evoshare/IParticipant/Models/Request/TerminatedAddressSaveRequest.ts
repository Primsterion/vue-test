

export default class TerminatedAddressSaveRequest  {
	City?: string = '';
	State?: string = '';
	StreetAddressFirst?: string = '';
	StreetAddressSecond?: string = '';
	PayToTheOrderOf?: string = '';
	ZipCode?: string = '';
	constructor(obj?: Partial<TerminatedAddressSaveRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
