

export default class LoginRequest  {
	Token?: string = '';
	Email?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<LoginRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
