

export default class EmpyrMediasResponse  {
	Id: number = 0;
	MediumUrl?: string = '';
	LargeUrl?: string = '';
	Type?: string = '';
	constructor(obj?: Partial<EmpyrMediasResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
