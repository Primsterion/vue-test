

export default class RegisterStepDeletedRequest  {
	Id: number = 0;
	constructor(obj?: Partial<RegisterStepDeletedRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
