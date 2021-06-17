

export default class UpdateTempPasswordRequest  {
	Password?: string = '';
	constructor(obj?: Partial<UpdateTempPasswordRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
