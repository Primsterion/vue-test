import PageRequest from '../../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class EvosharePaginationRequest  {
	Search?: string = '';
	DateStart?: Date = null;
	DateEnd?: Date = null;
	Page: PageRequest = null;
	constructor(obj?: Partial<EvosharePaginationRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
