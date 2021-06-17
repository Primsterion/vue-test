import PageRequest from '../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class AutocompleteRequest  {
	Search?: string = '';
	Page: PageRequest = null;
	constructor(obj?: Partial<AutocompleteRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
