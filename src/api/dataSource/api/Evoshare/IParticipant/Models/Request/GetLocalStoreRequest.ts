

export default class GetLocalStoreRequest  {
	Id: number = 0;
	constructor(obj?: Partial<GetLocalStoreRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
