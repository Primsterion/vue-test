

export default class MicrosavigsAddRequest  {
	Amount: number = 0;
	constructor(obj?: Partial<MicrosavigsAddRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
