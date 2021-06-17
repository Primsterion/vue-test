

export default class StoreMaxCashBackResponse  {
	StoreName?: string = '';
	Amount: number = 0;
	constructor(obj?: Partial<StoreMaxCashBackResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
