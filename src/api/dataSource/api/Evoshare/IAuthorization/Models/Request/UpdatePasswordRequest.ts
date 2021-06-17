

export default class UpdatePasswordRequest  {
	CurrentPassword?: string = '';
	NewPassword?: string = '';
	ConfirmNewPassword?: string = '';
	constructor(obj?: Partial<UpdatePasswordRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
