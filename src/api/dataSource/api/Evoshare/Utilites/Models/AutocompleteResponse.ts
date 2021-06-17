

export default class AutocompleteResponse<T>  {
	Id: T = null;
	Name?: string = '';
	constructor(obj?: Partial<AutocompleteResponse<T>>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
