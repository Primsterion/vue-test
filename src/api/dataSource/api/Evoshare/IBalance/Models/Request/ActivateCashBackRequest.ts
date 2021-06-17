

export default class ActivateCashBackRequest  {
	UserId: string = '';
	OnlineStoreId: number = 0;
	Browser?: string = '';
	RequestParams?: string = '';
	constructor(obj?: Partial<ActivateCashBackRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
