import PageRequest from '../../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class GetTripsActiveGetRequest  {
	Search?: string = '';
	DateStart?: Date = null;
	DateEnd?: Date = null;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetTripsActiveGetRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
