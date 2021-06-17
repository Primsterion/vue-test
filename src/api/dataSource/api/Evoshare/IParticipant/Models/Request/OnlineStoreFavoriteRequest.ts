

export default class OnlineStoreFavoriteRequest  {
	Id: number = 0;
	constructor(obj?: Partial<OnlineStoreFavoriteRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
