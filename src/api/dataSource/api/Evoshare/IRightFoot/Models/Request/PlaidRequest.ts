

export default class PlaidRequest  {
	Token?: string = '';
	constructor(obj?: Partial<PlaidRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
