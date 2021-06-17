

export default class ActivateOnlineStoreRequest  {
	StoreOnlineId: number = 0;
	constructor(obj?: Partial<ActivateOnlineStoreRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
