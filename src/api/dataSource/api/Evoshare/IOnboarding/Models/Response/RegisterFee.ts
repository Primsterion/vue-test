

export default class RegisterFee  {
	Amount?: number = null;
	constructor(obj?: Partial<RegisterFee>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
