

export default class AddCardRequest  {
	CardNumber?: string = '';
	constructor(obj?: Partial<AddCardRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
