

export default class StepComment  {
	UrlImg?: string = '';
	Author?: string = '';
	Text?: string = '';
	constructor(obj?: Partial<StepComment>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
