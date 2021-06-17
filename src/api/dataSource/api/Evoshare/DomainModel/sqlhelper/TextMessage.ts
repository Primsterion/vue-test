

export default class TextMessage  {
	NewsFromEvoShare: boolean = false;
	TravelPromotions: boolean = false;
	CashBackNotfications: boolean = false;
	AccountUpdates: boolean = false;
	constructor(obj?: Partial<TextMessage>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
