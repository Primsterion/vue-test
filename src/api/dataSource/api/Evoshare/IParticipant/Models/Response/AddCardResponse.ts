

export default class AddCardResponse  {
	LastFour?: string = '';
	Type?: string = '';
	constructor(obj?: Partial<AddCardResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
