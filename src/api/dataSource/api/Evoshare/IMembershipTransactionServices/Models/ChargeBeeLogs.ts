

export default class ChargeBeeLogs  {
	Step?: string = '';
	constructor(obj?: Partial<ChargeBeeLogs>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
