

export default class VerifyPhoneRequest  {
	PhoneNumber?: string = '';
	constructor(obj?: Partial<VerifyPhoneRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
