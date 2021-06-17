

export default class VerifyPhoneResponse  {
	Id: number = 0;
	constructor(obj?: Partial<VerifyPhoneResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
