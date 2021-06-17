

export default class StoreOnlineCategory  {
	Id: number = 0;
	Name?: string = '';
	Sort: number = 0;
	constructor(obj?: Partial<StoreOnlineCategory>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
