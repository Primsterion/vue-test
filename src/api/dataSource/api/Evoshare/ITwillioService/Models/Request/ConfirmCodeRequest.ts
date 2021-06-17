

export default class ConfirmCodeRequest  {
	Id: number = 0;
	PhoneNumber?: string = '';
	Code?: string = '';
	IsTestUser?: boolean = false;
	constructor(obj?: Partial<ConfirmCodeRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
