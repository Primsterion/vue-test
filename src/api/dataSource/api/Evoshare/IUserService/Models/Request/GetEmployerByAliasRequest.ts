

export default class GetEmployerByAliasRequest  {
	Alias?: string = '';
	constructor(obj?: Partial<GetEmployerByAliasRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
