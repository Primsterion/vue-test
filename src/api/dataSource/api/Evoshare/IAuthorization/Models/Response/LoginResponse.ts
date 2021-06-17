

export default class LoginResponse  {
	IsAuthorize: boolean = false;
	RoleAccess: Array<string> = null;
	constructor(obj?: Partial<LoginResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
