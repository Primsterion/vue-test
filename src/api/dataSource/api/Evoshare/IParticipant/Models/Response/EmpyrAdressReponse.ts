

export default class EmpyrAdressReponse  {
	StreetAddress?: string = '';
	PostalCode?: string = '';
	City?: string = '';
	State?: string = '';
	constructor(obj?: Partial<EmpyrAdressReponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
