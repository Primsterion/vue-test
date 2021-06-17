import TypeReset from '../../../../Evoshare/IUserService/Models/Request/TypeReset';

export default class ResetPasswordRequest  {
	Email?: string = '';
	Type: TypeReset = null;
	constructor(obj?: Partial<ResetPasswordRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
