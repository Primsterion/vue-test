import PageRequest from '../../../../Evoshare/Utilites/Extension/Models/PageRequest';

export default class ContributionsHistoryRequest  {
	Page: PageRequest = null;
	constructor(obj?: Partial<ContributionsHistoryRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
