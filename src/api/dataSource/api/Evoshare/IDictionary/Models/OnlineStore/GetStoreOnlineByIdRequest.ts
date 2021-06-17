

export default class GetStoreOnlineByIdRequest  {
	StoreOnlineId: number = 0;
	constructor(obj?: Partial<GetStoreOnlineByIdRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
